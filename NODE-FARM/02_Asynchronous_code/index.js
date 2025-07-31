const fs = require('fs');


fs.readFile('./txt/start.txt','utf-8',(err,data1)=>{
    fs.readFile(`./txt/${data1}.txt`,'utf-8',(err,data2)=>{
        fs.readFile(`./txt/append.txt`,'utf-8',(err,data3)=>{
            fs.writeFile(`./txt/final.txt`,`${data2}\n${data3}`,'utf-8',err=>{
                console.log("file SUccessfully made"); 
            });       
         });

    });

});

console.log("hurrah")