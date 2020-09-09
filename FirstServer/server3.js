'use strict'

const person=require('./person.json')
const http=require("http");
const { write } = require('fs');
const port= process.env.PORT || 3001;
const host=process.env.HOST || 'localhost';

const server= http.createServer((request, response)=>{
    response.writeHead(200,{'content-type':'text/html; charset=utf8'});
    response.write(
        `<!DOCTYPE html>
        <html>
        <head>
        <meta charset="utf-8"
        <title>person data</title>
        </head>
        <body>
        <p> ${person.firstname} ${person.lastname}</p>
        </body>
        </html>`
    );
    response.end();
});
 

server.listen(port,host,()=>console.log(`server${host} is listening on port${port}`));