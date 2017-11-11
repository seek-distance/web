var num=readInt();
for(var i=0;i<num;i++){
    arr.push(read_line());
}
//var arr=['ykit-config-yo','mykit','fekit','ykit-config-fekit','ykit'];
var search=read_line();
var result=[]
arr.map(item=>{
    var index=item.indexOf(search)
    if(index!=-1){
        if(index==0 && item==search){
            result.push({item,range:0})
        }else if(index==0){
            result.push({item,range:1})
        }else{
            result.push({item,range:index+1})
        }
    }
})

if(result.length==0){
    print("error")
}else{
    result.sort((a,b)=>a.range-b.range);
}
result.map(item=>{
    print(item.item);
})