const http = require('http');

const server=http.createServer((req,res)=>{
   if (req.url==='/') {
    res.write('welcome to our home page');
    res.end();
   }
   if (req.url==='/about') {
    res.write('here is our short history');
    res.end()
   }
   res.end(`
   <h1>Oops!!</h1>
   <p>we can't seem to find the page you are looking for</p>
   `)
  
});

server.listen(5000)