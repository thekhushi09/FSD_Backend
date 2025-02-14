const http=require('http');

const Users=[
    {id:1,name:"hary",age:25},
    {id:2,name:"maty",age:24},
    {id:3,name:"christen",age:23},
];

const server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-type":"application/json"});
    const name=Users.map((user)=>{
        return user.name;
    });
    res.end(JSON.stringify(name));

});

server.listen(9001,()=>{
    console.log('Server is running on port 90001');
})