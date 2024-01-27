console.log("its my firstnode Js");
//file system modules

//Synchronous
const fs = require("fs");
//write
fs.writeFileSync("hello.txt", "i am created by node ");
 ///read
const data = fs.readFileSync("hello.txt",'utf8');
console.log(data);

//Asynchronous
fs.readFile('hello.txt','utf8',(err,data)=>{
  console.log(data + '1');
})
//write
fs.writeFile('vinoth.txt','vanakam node la irunthu','utf8',(err)=>{
  if(err){
    console.log(err);
    return ;
  }
  console.log("super ");
})

// Basic Asynchronous for node Js move on
setTimeout(() => {
  callFun((r) => console.log("mohan " + r));
}, 2000);

const callFun = (callback) => {
  // console.log(`vankam da Mapla ${callback()}`);
  return callback("i am back mapla");
};

///Core Modules
/* 
fs,http-------create server,https ------create secure server,path,os
*/

//IMPORTANT --- dot vacha intha folder  kurikum so dot vaika kodathu

