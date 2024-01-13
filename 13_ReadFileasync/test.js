const fs =require('fs');

fs.readFile('./readdata.txt',{encoding: 'utf8'},(err,data)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(data)
})
