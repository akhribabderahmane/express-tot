const {readFile,writeFile} = require('fs'); // async functions

console.log("first task")
readFile("./content/first.txt",'utf8',(err,result)=>{
    console.log("second async task")
   if(err){
    console.log(err);
    return;
   }
   const first=result;
   
   readFile("./content/second.txt",'utf8',(err,result)=>{
    if (err) {
        console.log(err)
        return;
    }
    
    const second=result;
    writeFile('./content/result-async.txt',`here is the result: ${first} , ${second}`,(err,result)=>{
        if(err){
            console.log(err);
            return;
        }
        console.log(result);
    });
      
   })
});
console.log("third task");


