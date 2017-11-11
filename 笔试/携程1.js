var list=JSON.parse('{"myKey": "myValue"}');
var result={};
for(var i in list){
    result[list[i].slice(0,1).toUpperCase()+list[i].slice(1)]=list[i];
}
console.log(result);