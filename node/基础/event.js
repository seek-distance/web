var events = require('events');
var fs= require('fs');
var eventEmitter = new events.EventEmitter();

eventEmitter.on('connection',()=>{
    console.log('connect success');
    eventEmitter.emit('data_received');
})
eventEmitter.on('data_received',()=>{
    console.log('数据接收成功');
})
eventEmitter.emit('connection');

fs.readFile('./基础/input.txt',(err,data)=>{
    if (err){
        console.log(err.stack);
        return;
     }
     console.log(data.toString());
})
console.log("程序执行完毕。");