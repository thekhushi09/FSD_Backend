const fs=require('fs');
const data="I am in async write";
fs.writeFile("./data.txt",data,(err)=>{
    if(err)
        console.log("error writing file",err);
    else
        console.log("file written successfully");
})