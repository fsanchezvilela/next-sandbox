const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app.prepare().then(() =>{
  createServer((req, res) => {

    const parsedUrl = parse(req.url, true);
    const {pathname, query} = parsedUrl;
    if(pathname === "/chicken"){
      app.render(req,res, '/about-us', query)
    } else {
      handle(req,res, parsedUrl);
    }
  }).listen(3000, error => {
    if(error) throw error;
    console.log('> Ready on https://localhost:3000')
  })
})