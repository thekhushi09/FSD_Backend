const { promises } = require("dns");
const http=require("http");
const fs=require('fs/promises');

const server=http.createServer(async(req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    const data=await fs.readFile("./index.html");
    res.end(data);

});

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000/');
})