const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url); // use to get url
//   console.log(req.method); // use to get 'GET,POST like that'
//   console.log(req.headers.host);
//   process.exit(); //to cancel the event loop
// });
// server.listen(8080);
// console.log("helo");

//Sending response to the server :)
const server=http.createServer((req,res)=>{
  res.setHeader('Content-Type','text/html')
  res.write('<html>')
  res.write('<title>i am mohan just created node </title>')
  res.write('<body><h2>I am H2</h2></body>')
  res.write('</html>')
  
  res.end("helo sir")
})
server.listen(8080,()=>{
  console.log("sucess");
})