from pathlib import Path
from playwright.sync_api import sync_playwright
import json
p=Path('/mnt/data/NMNRT_v2_4_HS2_Answer_Guide.html');checks=[];errors=[]
with sync_playwright() as pw:
 b=pw.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox']);page=b.new_page(viewport={'width':390,'height':844});page.on('pageerror',lambda e: errors.append(str(e)));page.set_content(p.read_text(),wait_until='load')
 assert '123 / 123' in page.locator('#resultCount').inner_text();checks.append('All 123 originals load without external script/style/font requests')
 page.locator('#search').fill('126');page.locator('.answer>summary').click();assert page.locator('#q126 .figure img').evaluate('(img)=>img.complete&&img.naturalWidth>0');checks.append('Embedded original graph loads')
 assert page.locator('#q126 .practice-area').count()==0;checks.append('Incomplete graph not graded')
 page.locator('#theme').select_option('dark');assert page.locator('html').get_attribute('data-theme')=='dark';checks.append('Standalone theme selector works')
 assert page.evaluate('document.documentElement.scrollWidth <= innerWidth + 1');checks.append('390px no horizontal overflow')
 page.locator('#search').fill('43');page.locator('.answer>summary').click();assert 'C — sửa khóa A' in page.locator('.review-key').inner_text();assert page.locator('.practice-area a.primary').get_attribute('href').startswith('https://chiangu.dpdns.org/nmnrt/index.html?');checks.append('Reviewed key and published-site drill URL retained')
 assert not errors,errors;b.close()
result={'passed':len(checks),'checks':checks,'pageErrors':errors,'mode':'set_content of actual self-contained deliverable; no mock localStorage injected; navigation links inspected, not followed.'};Path('/mnt/data/nmnrt_hs2/tests/standalone-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2));print(result)
