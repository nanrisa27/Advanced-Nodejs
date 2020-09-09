'use strict'

const person=require('./person.json')
const http=require("http");
const { write } = require('fs');
const port= process.env.PORT || 3001;
const host=process.env.HOST || 'localhost';

const server= http.createServer((request, response)=>{
    response.writeHead(200,{'content-type':'text/html; charset=utf8'});
    response.write();
    response.end();
});
function partA(){
    let htmlString=
    `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"
    <title>person data</title>
    </head>
    <body>
    <h1>Person</>`;
    let partB=
    `<p> ${person.firstname} ${person.lastname}</p>`;
    let endPart=
    `</body>
    </html>`
    
    
}
 

server.listen(port,host,()=>console.log(`server${host} is listening on port${port}`));