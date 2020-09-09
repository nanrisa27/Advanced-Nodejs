"use strict"
const person=require('./person.json')
const http=require("http");
const port= process.env.PORT || 3001;
const host=process.env.HOST || 'localhost';

const server= http.createServer((request, response)=>{
      response.writeHead(200,{'content-type':'application/json;'});
      response.end(JSON.stringify(person)); 
});


server.listen(port,host,()=>console.log(`server${host} is listening on port${port}`));