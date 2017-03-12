var http = require("http"); // http 模块  
     
http.createServer(function(req, res) {  
  res.writeHead( 200 , {"Content-Type":"text/html"});  
  res.write("<h1>Node.js</h1>");  
  res.write("<p>Hello World</p>");  
  res.end("<p>beyondweb.cn</p>");  
}).listen(8080); // 监听端口3000  
  
console.log("HTTP server is listening at port 8080.");