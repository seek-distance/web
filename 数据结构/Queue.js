var fs= require('fs');
function print(d){
    console.log(d);
}
//基本原理
function Queue(){
    this.data=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.end=end;
    this.toString=toString;
    this.empty=empty;
}
function enqueue(ele){
    this.data.push(ele);
}
function dequeue(){
    return this.data.shift();
}
function front(){
    return this.data[0];
}
function end(){
    return this.data[this.data.length-1];
}
function toString(){
    var newStr="";
    for(var i=0;i<this.data.length;i++){
        newStr += this.data[i] + '\n';
    }
    return newStr;
}
function empty(){
    if(this.data.length == 0){
        return true;
    }else{
        return false;
    }
}

//example
function Dancer(name,sex){
    this.name=name;
    this.sex=sex;
}
function getDancers(males,females){
    var names=fs.readFileSync("dancers.txt","utf-8").split('\n');
    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim();
        var dancer=names[i].split(" ");
        var sex=dancer[0];
        var name=dancer[1];
        if (sex == 'F') {
            females.enqueue(new Dancer(name,sex));
        }else{
            males.enqueue(new Dancer(name,sex));
        }
    }
}
function dance(males,females){
    print("舞蹈队伍有：");
    while(!females.empty() && !males.empty()){
        person = females.dequeue();
        print("女生："+person.name);
        person = males.dequeue();
        print("男生：" + person.name + "\n");
    }
}

var femalesDancers=new Queue();
var malesDancers=new Queue();
getDancers(malesDancers,femalesDancers);
dance(malesDancers,femalesDancers);

if (!femalesDancers.empty()) {
    print(femalesDancers.front().name + "正在等待");
}
if (!malesDancers.empty()) {
    print(malesDancers.front().name + "正在等待");
}
