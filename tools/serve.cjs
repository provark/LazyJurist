const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.png':'image/png' };
http.createServer((req,res) => {
  let name;
  try { name = decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch { res.writeHead(400).end(); return; }
  if (name === '/') name = '/Index.html';
  const file = path.resolve(root, '.' + name);
  if (!file.startsWith(root + path.sep) || !types[path.extname(file)] || !fs.existsSync(file) || !fs.statSync(file).isFile()) { res.writeHead(404).end(); return; }
  res.writeHead(200, {'Content-Type':types[path.extname(file)]+'; charset=utf-8','Cache-Control':'no-store'});
  fs.createReadStream(file).pipe(res);
}).listen(Number(process.env.PORT || 4173),'127.0.0.1',()=>console.log('Lazy Jurist preview: http://127.0.0.1:'+(process.env.PORT || 4173)));
