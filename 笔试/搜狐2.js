var count=0;
while(1){
    count=0;
    var arr=readline().split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
        if(!arr[i]) count++;
    }
    if(count==6)    break;
    var result=0;
    var nextArr=arr
    while(nextArr.length>0){
        var tplArr=nextArr;
        for (var i = tplArr.length-1; i>=0; i--) {
            var element = tplArr[i];
            
        }
    }
}