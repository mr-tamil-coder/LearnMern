console.log("its my firstnode Js");
//file system modules
const fs = require("fs");
fs.writeFileSync("hello.txt", "i am created by node ");

// Basic Asynchronous for node Js move on
setTimeout(() => {
  callFun((r) => console.log("mohan "+r));
},2000);

const callFun=(callback)=>{
    // console.log(`vankam da Mapla ${callback()}`);
    return callback("i am back mapla")
}


///Core Modules 
/* 
fs,http-------create server,https ------create secure server,path,os
*/

//IMPORTANT --- dot vacha intha folder  kurikum so dot vaika kodathu
const http=require("http")
const server=http.createServer((req,res)=>console.log("helo "))
server.listen(8080);