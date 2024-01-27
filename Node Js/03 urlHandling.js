const http = require("http");
const fs=require("fs")
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url == "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<title>i am mohan just created node </title>");
    res.write("<body><h2>I am H2</h2>");
    res.write('<form action="/vinoth" method="post">');
    res.write('<input type="text" name="mohan">');
    res.write(' <input type="submit" value="send">');
    res.write("</form>");

    res.write("</body></html>");

    res.end("helo sir");
    return;
  }
  
  if (url == "/h") res.write("<h1>i am not executed</h1>");

  if(url=='/vinoth' && method=='POST'){
    fs.writeFileSync('dummy.txt',"i am in testing mode ")
    res.setHeader('Location','/h')
    res.statusCode=302 //redirection pana solranganu purinchikum
    res.end()
    return ;
  }


});

server.listen(8080, () => {
  console.log("sucess");
});
