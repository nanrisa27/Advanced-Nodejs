"use strict"

const http=require("http");
const port= process.env.PORT || 3003;

const host=process.env.HOST || 'localhost';
const server= http.createServer((request, response)=>{
      response.writeHead(200,{'content-type':'text/plain; charset=utf8'});
      response.end('hello world'); 
});


server.listen(port,host,()=>console.log(`server${host} is listening on port${port}`));