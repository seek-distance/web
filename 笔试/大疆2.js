/* var length=readInt();
var arr=[];
var result=[];
for(var i=0;i<length;i++){
    arr[i]=read_line();
} */

var arr=['ddiaiji','ddiajiji'];
var result=[];

arr.map((item,i)=>{
    var tplArr=item.split('');
    var jIndex=[];
    tplArr.map((item,index)=>{
        if(item=='j')   jIndex.push(index);
    })
    var count=0;
    jIndex.map((item)=>{
        var dCount=0,iCount=0;
        for(var j=0;j<item;j++){
            if(tplArr[j] == 'd')    dCount++;
        }
        for(var j=item+1;j<tplArr.length;j++){
            if(tplArr[j] == 'i')    iCount++;
        }
        count += dCount * iCount
    })
    result.push(count)
})
console.log(result);
