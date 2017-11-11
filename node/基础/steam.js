var fs = require("fs");
var zlib = require('zlib')
var data = '';

// 创建可读流
var readerStream = fs.createReadStream('./基础/input.txt');

// 设置编码为 utf8。
readerStream.setEncoding('UTF8');

// 处理流事件 --> data, end, and error
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("程序执行完毕");

/* var writeData='niha0p';
var writeSteam = fs.createWriteStream('output.txt');
writeSteam.write(writeData,'utf-8',function(){
    console.log('success')
}); */
/* var writerStream = fs.createWriteStream('output.txt');
readerStream.pipe(writerStream); */
/* fs.createReadStream('./基础/input.txt')
.pipe(zlib.createGzip())
.pipe(fs.createWriteStream('output.gzip')) */