const fs=require('fs');

console.log("Create a new directory");

fs.mkdir('MyFolder',{recursive:true},(err)=>{   //used to create a directory
    if(err){
        console.error("An error occured:",err);
        return;
    }
    console.log("Directory created successfully");
});