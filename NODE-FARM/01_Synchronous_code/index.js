const fs = require('fs');

const txtin = fs.readFileSync('./txt/input.txt','utf-8');
const textout = `This is what we know about the avocado ${txtin}.\ncreated on ${Date.now()}`;
fs.writeFileSync(`./txt/output.txt`,textout);
console.log("File written");

