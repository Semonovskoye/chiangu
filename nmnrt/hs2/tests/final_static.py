from pathlib import Path
from urllib.parse import urlsplit,unquote
from bs4 import BeautifulSoup
import re,json,hashlib,shutil,subprocess,zipfile
W=Path('/mnt/data/nmnrt_hs2');O=W/'output';S=W/'test-site'
shutil.copytree(O/'nmnrt',S/'nmnrt',dirs_exist_ok=True)
checks=[];missing=[]
def resolve_ref(raw,parent):
    u=urlsplit(raw)
    if u.scheme or u.netloc or not u.path:return None
    return (S/u.path.lstrip('/') if u.path.startswith('/') else parent/unquote(u.path)).resolve()
# Every static reference in delivered HTML/CSS, resolved against the merged site.
for f in O.rglob('*'):
    if f.suffix.lower() not in ['.html','.css']:continue
    parent=(S/f.relative_to(O)).parent
    if f.suffix=='.html':
        soup=BeautifulSoup(f.read_text(),'html.parser');refs=[]
        for t in soup.find_all(True):
            for a in ['src','href','poster']:
                if t.get(a):refs.append(t[a])
    else:refs=[x.strip(' \"\'') for x in re.findall(r'url\(([^)]+)\)',f.read_text())]
    for ref in refs:
        p=resolve_ref(ref,parent)
        if p is None:continue
        item={'file':str(f.relative_to(O)),'reference':ref,'resolved':str(p.relative_to(S)) if p.is_relative_to(S) else str(p),'exists':p.exists()}
        checks.append(item)
        if not p.exists():missing.append(item)
assert not missing,missing
# Original source bytes and attachment untouched.
review=json.loads((O/'nmnrt/hs2/review-data.json').read_text())
print('SNAPSHOTS',json.dumps(review['sourceSnapshots'],ensure_ascii=False)[:2000])
# No bundled fonts; no inline font payloads.
assert not any(f.suffix.lower() in ['.ttf','.woff','.woff2','.otf','.eot'] for f in O.rglob('*'))
for f in [*O.rglob('*.html'),*O.rglob('*.css'),Path('/mnt/data/NMNRT_v2_4_HS2_Answer_Guide.html')]:
    assert not re.search(r'data:(?:font/|application/(?:font|x-font)|application/octet-stream)[^\"\']*;base64',f.read_text()),str(f)
# Explicit no-change comparison for core files.
unchanged=[]
for name in ['core.js','audit.css','learning-core.js','learning.css']:
    b=(W/'baseline/nmnrt'/name).read_bytes();a=(O/'nmnrt'/name).read_bytes();assert a==b,name;unchanged.append(name)
syntax=[]
for f in O.rglob('*.js'):
    subprocess.run(['node','--check',str(f)],check=True,stdout=subprocess.DEVNULL,stderr=subprocess.PIPE);syntax.append(str(f.relative_to(O)))
result={'staticReferencesChecked':len(checks),'missingReferences':missing,'references':checks,'syntaxChecked':syntax,'unchangedCoreFiles':unchanged,'fontFilesDistributed':0,'scope':'Filesystem/JS syntax checks on merged local site; not a live deployment test.'}
(W/'tests/static-reference-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
(O/'nmnrt/hs2/static-reference-results.json').write_text(json.dumps(result,ensure_ascii=False,indent=2))
print('PASS',len(checks),'static references;',len(syntax),'JS files syntax checked; no fonts')
