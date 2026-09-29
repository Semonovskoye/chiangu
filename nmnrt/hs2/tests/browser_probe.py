import json,threading,functools,http.server
from pathlib import Path
from playwright.sync_api import sync_playwright
w=Path('/mnt/data/nmnrt_hs2')
server=http.server.ThreadingHTTPServer(('127.0.0.1',0),functools.partial(http.server.SimpleHTTPRequestHandler,directory=str(w/'test-site')))
threading.Thread(target=server.serve_forever,daemon=True).start()
url=f'http://127.0.0.1:{server.server_port}/nmnrt/index.html'
with sync_playwright() as p:
 b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 page=b.new_page(viewport={'width':1440,'height':1000})
 try:
  page.goto(url,wait_until='networkidle',timeout=15000)
  print('OK',page.title(),page.locator('#app').inner_text()[:300])
 except Exception as e:print('NAVIGATION FAILED',str(e))
 b.close()
server.shutdown()
