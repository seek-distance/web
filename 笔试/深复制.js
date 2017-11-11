function extend(obj){
    let type=getType(obj);
    let result;
    if(type === 'object'){
        result={};
    }else if(type === 'array'){
        result=[];
    }else{
        return obj;
    }
    //console.log(type);
    for(var i in obj){
        result[i] = typeof obj[i] == 'object' ? extend(obj[i]) : obj[i];
    }
    return result;

    function getType(data){
        return Object.prototype.toString.call(data).slice(8,-1).toLowerCase();
    }
}
var obj={
    test:1,
    arr:[{
        test1:[123],
        a:3
    }],
    fn(){
        console.log('aaa');
    }
}
var result=extend(obj);
console.log(result,obj);