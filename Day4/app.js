const express=require('express');

const app=express();
app.use(express.json());
let users=[
    // {id:1,name:'annie'},                        //inserting data and then save it in users not providing early
    // {id:2,name:'john'},
    // {id:3,name:'anthony'}
    
];

app.get('/api/users',(req,res)=>{
    res.json(users);
})

app.get('/users',(req,res)=>{
    res.send('welcome to backend server using express');
})

// here creating post request
app.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({message:'data received',data:data});
})


app.listen(9000,()=>{
    console.log("server is running on port 9000");
})

