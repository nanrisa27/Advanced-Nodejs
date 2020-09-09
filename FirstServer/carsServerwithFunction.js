'use strict';

const cars=require('./cars.json');
const http=require("http");
const port= process.env.PORT || 3001;
const host=process.env.HOST || 'localhost';

const server= http.createServer((request, response)=>{
    response.writeHead(200,{'content-type':'text/html; charset=utf8'});
    response.write(createhtml());
    response.end();
});

server.listen(port,host,()=>console.log(`server${host} is listening on port${port}`));

function partA(){
    let htmlString=
    `<!DOCTYPE html>
    <html>
    <head>
    <meta charset="utf-8"
    <title>cars data</title>
    </head>
    <body>
    <h1>Cars</>`;
    let partB="";
    for (let car of cars){partB +=
        `<p> ${car.model} ${car.licence}</p>`;}
    
    let endPart=
    `</body>
    </html>`;
    return htmlString+partB+endPart;
    
    
}
 

