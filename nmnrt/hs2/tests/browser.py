from pathlib import Path
import re, json, base64, mimetypes, urllib.parse, traceback
from bs4 import BeautifulSoup
from playwright.sync_api import sync_playwright
W=Path('/mnt/data/nmnrt_hs2');SITE=W/'test-site';OUTPUT=W/'tests'/'output';OUTPUT.mkdir(exist_ok=True)
checks=[];errors=[]
def ck(name,ok):
 assert ok,name
 checks.append({'name':name,'passed':True})
def data_uri(p):return 'data:'+ (mimetypes.guess_type(str(p))[0] or 'application/octet-stream')+';base64,'+base64.b64encode(p.read_bytes()).decode()
def localref(text,folder):
 text=urllib.parse.unquote(text.split('?')[0].split('#')[0])
 return (folder/text).resolve()
def css_inline(text,folder):
 def repl(m):
  url=m.group(1).strip('"\' ')
  if re.match(r'^(data:|https?:|#)',url):return m[0]
  p=localref(url,folder)
  return 'url("'+data_uri(p)+'")' if p.is_file() else m[0]
 return re.sub(r'url\(([^)]+)\)',repl,text)
def build(relative,storage=None):
 p=SITE/relative;soup=BeautifulSoup(p.read_text(),'html.parser');scripts=[]
 for tag in list(soup.find_all('link',rel='stylesheet')):
  f=localref(tag['href'],p.parent);css=css_inline(f.read_text(),f.parent);t=soup.new_tag('style');t.string=css;tag.replace_with(t)
 for tag in list(soup.find_all('link',rel=lambda x:x and 'icon' in str(x))):tag.decompose()
 for img in soup.find_all('img',src=True):
  f=localref(img['src'],p.parent)
  if f.is_file():img['src']=data_uri(f)
 for tag in list(soup.find_all('script')):
  f=localref(tag['src'],p.parent) if tag.get('src') else None
  scripts.append(f.read_text() if f else tag.string or '');tag.decompose()
 init='''(()=>{const x=Object.assign({},%s);window.__mem=x;Object.defineProperty(window,'localStorage',{configurable:true,value:{getItem:k=>Object.hasOwn(x,k)?x[k]:null,setItem:(k,v)=>x[k]=String(v),removeItem:k=>delete x[k],clear:()=>Object.keys(x).forEach(k=>delete x[k]),key:i=>Object.keys(x)[i]||null,get length(){return Object.keys(x).length;}}});})();'''%json.dumps(storage or {})
 init+='window.HS2_APP_URL="https://chiangu.dpdns.org/nmnrt/index.html";window.HS2_SITE_URL="https://chiangu.dpdns.org/";'
 init+='window.HS2_IMAGES='+json.dumps({f.name:data_uri(f) for f in (SITE/'nmnrt/hs2/images').iterdir()})+';'
 # Set a test-only base for link resolution. All scripts/styles/fonts/images are inlined.
 base=soup.new_tag('base',href='https://chiangu.dpdns.org/'+relative);soup.head.insert(0,base)
 for script in [init]+scripts:
  t=soup.new_tag('script');t.string=script.replace('</script','<\\/script');soup.body.append(t)
 return str(soup)
def boot(page,relative,mode='dark',storage=None):
 st={'chiangu-theme':mode};st.update(storage or {})
 page.set_content(build(relative,st),wait_until='load');page.wait_for_timeout(150)
def no_overflow(page):return page.evaluate('document.documentElement.scrollWidth <= window.innerWidth + 1')
try:
 with sync_playwright() as p:
  browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
  page=browser.new_page(viewport={'width':1440,'height':1000});page.on('pageerror',lambda e:errors.append(str(e)))
  # Companion guide: original context and answers stay separate.
  boot(page,'nmnrt/hs2/index.html')
  ck('Guide opens 123 originals', '123 / 123' in page.locator('#resultCount').inner_text())
  ck('Eight originals per page',page.locator('.question').count()==8)
  ck('Guide initially hides answers',page.locator('.answer[open]').count()==0)
  ck('No desktop horizontal overflow',no_overflow(page))
  ck('Dark palette resolved',page.locator('html').get_attribute('data-theme')=='dark')
  page.locator('#search').fill('43')
  ck('Find exact document number',page.locator('.question').count()==1 and page.locator('#q43').count()==1)
  page.locator('.answer>summary').click()
  ck('Q43 source key kept as A','A' in page.locator('.source-key').inner_text())
  ck('Q43 reviewed C disclosed','C — sửa khóa A' in page.locator('.review-key').inner_text())
  ck('Q43 uses existing NMNRT ID','Đã có' in page.locator('.practice-area').text_content())
  ck('Guide drill link keeps document number','hs2=43' in page.locator('.practice-area a.primary').get_attribute('href'))
  page.screenshot(path=str(OUTPUT/'hs2-q43-dark.png'),full_page=True)
  page.locator('#search').fill('126');page.locator('.answer>summary').click()
  ck('Q126 original image retained',page.locator('#q126 .figure img').count()==1)
  ck('Q126 no drill button',page.locator('#q126 .practice-area').count()==0)
  ck('Q126 ambiguity explicit','thiếu chú giải' in page.locator('#q126').inner_text().lower())
  ck('Q126 both conditional totals shown','3 cây' in page.locator('.answer-note').inner_text() and '1 cây' in page.locator('.answer-note').inner_text())
  page.screenshot(path=str(OUTPUT/'hs2-q126-dark.png'),full_page=True)
  page.locator('#clearSearch').click();page.locator('#kind').select_option('tf')
  ck('16 true/false blocks retained',page.locator('#resultCount').inner_text().startswith('16 / 123'))
  page.locator('#kind').select_option('essay')
  ck('19 essays retained',page.locator('#resultCount').inner_text().startswith('19 / 123'))
  page.locator('#clearSearch').click();page.locator('#filter').select_option('not-found')
  ck('21 original questions not text matched',page.locator('#resultCount').inner_text().startswith('21 / 123'))
  page.locator('#clearSearch').click();page.locator('#search').fill('MB-QHOTV-L2-001')
  ck('Duplicate printed code displays both questions',page.locator('#q49').count()==1 and page.locator('#q59').count()==1)
  page.locator('#search').fill('khi khong')
  ck('Accent-insensitive search finds stomata',page.locator('.question').count()>0)
  page.locator('#clearSearch').click();page.locator('#next').click()
  ck('Pagination works',page.locator('#pageCount').inner_text()=='2 / 16')
  page.locator('#theme').select_option('light')
  ck('Guide Light switch works',page.locator('html').get_attribute('data-theme')=='light')
  page.locator('#search').fill('59');page.locator('#showAnswers').click()
  page.screenshot(path=str(OUTPUT/'hs2-q59-light.png'),full_page=True)
  ck('Guide does not write revision progress',page.evaluate("!Object.keys(window.__mem).some(k=>k.startsWith('nmnrt.'))"))
  page.set_viewport_size({'width':390,'height':844});page.locator('#theme').select_option('dark');page.locator('#search').fill('43')
  ck('Guide mobile no overflow',no_overflow(page))
  page.screenshot(path=str(OUTPUT/'hs2-q43-mobile.png'),full_page=True)
  # Actual application code with isolated, test-only storage.
  page.set_viewport_size({'width':1440,'height':1000});boot(page,'nmnrt/index.html')
  ck('Application opens expanded bank',page.evaluate('window.NMNRT_DATA.cards.length')==786)
  ck('Learning points match bank',page.evaluate('window.NMNRT_LEARNING_DATA.points.length')==786)
  ck('HS2 banner exists',page.locator('.hs2-banner').count()==1)
  ck('Main app desktop no overflow',no_overflow(page))
  page.screenshot(path=str(OUTPUT/'hs2-nmnrt-desktop.png'),full_page=True)
  page.locator('[data-action="hs2-start"][data-count="5"]').click()
  session=page.evaluate("JSON.parse(localStorage.getItem('nmnrt.v21.session'))")
  ck('HS2 quick start picks five unique cards',len(session['ids'])==5 and len(set(session['ids']))==5)
  ck('Quick start only uses HS2 mapped ideas',page.evaluate("JSON.parse(localStorage.getItem('nmnrt.v21.session')).ids.every(id=>NMNRT_DATA.documentCollection.cardIds.includes(id))"))
  right=page.evaluate("NMNRT_DATA.cards.find(c=>c.id===JSON.parse(localStorage.getItem('nmnrt.v21.session')).ids[0]).correctChoice")
  page.locator(f'[data-choice="{right}"]').click()
  ck('Correct choice feedback works','✓ Đúng' in page.locator('#feedback').inner_text())
  ck('One completed attempt recorded',page.evaluate("Object.values(JSON.parse(localStorage.getItem('nmnrt.v21.records'))).reduce((n,r)=>n+r.attempts,0)")==1)
  page.locator('[data-action="next"]').click();page.locator('[data-action="skip"]').click()
  ck('Skip is not labelled wrong','Chưa biết / bỏ qua' in page.locator('#feedback').inner_text())
  page.locator('[data-action="next"]').click()
  wrong=page.evaluate("(()=>{const s=JSON.parse(localStorage.getItem('nmnrt.v21.session'));const c=NMNRT_DATA.cards.find(c=>c.id===s.ids[s.index]);return c.choices.find(o=>o.id!==c.correctChoice).id;})()")
  page.locator(f'[data-choice="{wrong}"]').click()
  ck('Wrong choice explicitly marked','Chưa đúng' in page.locator('#feedback').inner_text())
  page.locator('[data-action="pause"]').click();before=page.evaluate("localStorage.getItem('nmnrt.v21.session')")
  page.once('dialog',lambda d:d.dismiss());page.locator('[data-action="hs2-start"][data-count="10"]').click()
  ck('Cancelling replacement preserves unfinished session',page.evaluate("localStorage.getItem('nmnrt.v21.session')")==before)
  mem=page.evaluate('window.__mem');boot(page,'nmnrt/index.html',storage=mem)
  ck('Saved session reconstructed after simulated reload',page.locator('[data-action="resume"]').count()==1)
  page.locator('[data-action="resume"]').click()
  ck('Restored scored state matches same key','Chưa đúng' in page.locator('#feedback').inner_text())
  page.locator('[data-action="learn-card"]').click()
  ck('Feedback can open the learning tab',page.locator('#learningView').count()==1)
  ck('Learning card heading visible',page.locator('[data-study-heading]').count()==1)
  boot(page,'nmnrt/index.html');page.locator('[data-view="study"]').first.click()
  page.locator('#learnSearch').fill('chậu')
  ck('Learning includes new HS2 material',page.locator('[data-study-book]').count()>0)
  page.locator('[data-view="sources"]').first.click()
  ck('Sources page includes HS2 guide','Đề gốc & đáp án' in page.locator('#app').inner_text())
  ck('Sources page shows new total','786' in page.locator('#app').inner_text())
  page.locator('[data-view="learn"]').first.click();page.set_viewport_size({'width':390,'height':844})
  ck('App mobile no overflow',no_overflow(page))
  page.screenshot(path=str(OUTPUT/'hs2-nmnrt-mobile.png'),full_page=True)
  # Verify new questions are available in the all-question audit filter.
  page.set_viewport_size({'width':1440,'height':1000});boot(page,'nmnrt/audit/index.html');page.locator('#auditBasis').select_option('document-adapted')
  ck('Audit lists exactly 54 HS2 additions',page.locator('#auditCount').inner_text().startswith('54 '))
  ck('No undefined basis labels','undefined' not in page.locator('#auditItems').inner_text())
  ck('No uncaught errors across harness',not errors)
  browser.close()
except Exception as e:
 errors.append(str(e));traceback.print_exc()
finally:
 (W/'tests/browser-results.json').write_text(json.dumps({'mode':'Offline Chromium set_content; real localhost navigation blocked by ERR_BLOCKED_BY_ADMINISTRATOR','storage':'Test-only localStorage mock. Reload simulated from serialized state. Does not test deployment, real HTTP loading, persistence, cross-tab behavior, or other browsers.','checks':checks,'passed':len(checks),'errors':errors},ensure_ascii=False,indent=2))
 print('PASSED',len(checks),'ERRORS',errors)
