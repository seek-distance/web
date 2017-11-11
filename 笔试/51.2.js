function People(name,age){
    this.name=name;
    this.age=age;
}
People.prototype.say=function(){
    console.log("我是"+ this.name +",我今年"+ this.age +"岁");
}
function Man(name,age){ 
    People.call(this,name,age);
    this.sex = 'male';
}
Man.prototype=new People();
Man.prototype.constructor=Man;
Man.prototype.say=function(){
    console.log("我是"+ this.name +",我今年"+ this.age +"岁，性别"+ this.sex);
}

new Man('123','1')