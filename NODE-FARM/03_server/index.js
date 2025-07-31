const http = require('http')
const url = require('url')
const port = 8000;
local_host = '127.0.0.1';

const server = http.createServer((req,res)=>{
    const path = req.url;
    if(path ==='/' || path === '/overview'){
        res.end("This is the overview page");
    }
    else if( path === "/product"){
        res.end("This is the productpage");    
    }

    else if(path === "/rhit"){
        res.end("THis is the creator of the website rhit's page");
    }
    else{
        res.end("bad req 404");
    }
})



server.listen(port,local_host,()=>{
    console.log(`Listning ont the port: http://${local_host}:${port}/` )
})

