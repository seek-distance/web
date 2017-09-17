var arr=[
    {x:2,y:1},
    {x:5,y:1},
    {x:4,y:2},
    {x:5,y:3},
    {x:3,y:5},
    {x:8,y:3},
    {x:7,y:4},
    {x:6,y:6},
    {x:1,y:7}    
];
bubbleSort(arr,'x')
bubbleSort(arr,'y')
var result=[];
for(var i=0;i<arr.length;i++){
    var hasBigger=false;
    for(var j=i+1;j<arr.length;j++){
        if(arr[j].y>=arr[i].y && arr[j].x>arr[i].x){
            hasBigger=true;
            break;
        } 
    }
    if(!hasBigger){
        result.push(arr[i]);
    }
}
console.log(result);
function bubbleSort(arr,order){
    for(var i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j][order]>arr[j+1][order]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
}