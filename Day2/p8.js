const http=require('http');
const { title } = require('process');

const server=http.createServer(async(req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    const data=await fetch('https://fakestoreapi.com/products');
    const jsonData=await data.json();
    const myhtml=`<html>
    <head>
    <title>MY PRODUCTS</title>
    <style>
    .container{
    border:2px solid black;
    background-color:yellow; color:whie;}
    border-radius:5px;
    .img{
    border-radius:5px;}
    </style></head>
    <body>
    <h1>Products</h1>
    ${
        jsonData.map((product)=>{
            return `<div class="container">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <img src="${product.image}" height="200" width="150" alt="${product.title}">
            <p>${product.price}</p>
            <hr>
            </div>`;

        })
    }
    </body>
    </html>`
    res.end(myhtml);
})

server.listen(9000,(err)=>{
    if(err)
        throw err;
    console.log('Server is running at http://localhost:9000');
});