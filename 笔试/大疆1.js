var length=readInt();
var arr=[];
for(var i=0;i<length;i++){
    arr[i]=readInt();
}

//var arr=[9,155];
var changeArr=[]
arr.map((item)=>{
    changeArr.push(item.toString(2));
})
var maxLength=0;
changeArr.map((item)=>{
    if(item.length>maxLength)   maxLength=item.length
})
changeArr.map((item,index)=>{
    if(item.length<maxLength){
        var tag=maxLength-item.length;
        var tpl0='';
        for(let i=0;i<tag;i++){
            tpl0 += '0';
        }
        changeArr[index]=tpl0+item;
    }
})
var arr1=changeArr[0].split('');
var arr2=changeArr[1].split('');
var count=0;
arr1.map((item,i)=>{
    if(item==arr2[i]){
        count++;
    }
})
console.log(count)