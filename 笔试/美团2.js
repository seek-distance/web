var arr=[2,1,4,3];
var minIndex=0;
arr.map((item,i)=>{
    if(item<arr[minIndex])    minIndex=i;
})
if(minIndex!=0){
    [arr[0],arr[minIndex]]=[arr[minIndex],arr[0]]
}else{
    minIndex=1;
    for (var i = 1; i < arr.length; i++) {
        if(arr[i]<arr[minIndex])    minIndex=i;       
    }
    [arr[0],arr[minIndex]]=[arr[minIndex],arr[0]]
}
console.log(arr)