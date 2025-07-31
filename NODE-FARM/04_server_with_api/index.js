const http = require('http');
const fs = require('fs');
const url = require('url');
const { json } = require('stream/consumers');
const replace_template  = require('./modules/replace-templates.js');


const port = 8000;
const local_host = '127.0.0.1';

const temp_overview = fs.readFileSync('./templates/template-overview.html', 'utf-8');
const temp_card = fs.readFileSync('./templates/template-card.html', 'utf-8');
const temp_product = fs.readFileSync('./templates/product.html', 'utf-8');

const data = fs.readFileSync('./data.json', 'utf-8');
const dataobj = JSON.parse(data);



const server = http.createServer((req, res) => {

    
    const { pathname, query } = url.parse(req.url, true);

    // console.log(query, pathname);
    // console.log(url.parse(req.url, true));

    // Overview page
    if (pathname === '/' || pathname === '/overview') {
        res.writeHead(200, { "Content-Type": "text/html" });
        const cards_html = dataobj.map(el => replace_template(temp_card, el)).join('');
        const output = temp_overview.replace('{%PRODUCT_CARDS%}', cards_html);
        res.end(output);

    // Product page    
    } else if (pathname === "/product") {
        
        res.writeHead(200, { "Content-Type": "text/html" });
        let product = dataobj[query.id];
        let output = replace_template(temp_product,product);
        res.end(output);

    // My personal page      
    } else if (pathname === "/rhit") {
        res.end("This is the creator of the website rhit's page");

    // API page    
    } else if (pathname === '/api') {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(dataobj));

    // Not found page  
    } else {
        res.writeHead(404, {
            'Content-Type': 'text/html',
            'my-own-header': 'hello i am rhit'
        });
        res.end("<h1>404 - Page not found</h1>");
    }
});

server.listen(port, local_host, () => {
    console.log(`Listening on http://${local_host}:${port}/`);
});
