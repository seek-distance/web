var col=2;  //行
var row=3
var arr=[
    [-2,-3,3],
    [-5,-10,1]
]
var x=0;
var y=0;
var result=arr[y][x];
while(x!=row-1 && y!=col-1){
    console.log(x,y,row-1,col-1)
    if(x+1>row-1){
        y++;
        result+=arr[y][x];
        continue;
    }
    if(y+1>col-1){
        x++;
        result+=arr[y][x];
        continue;
    }
    var right=arr[y][x+1];
    var down=arr[y+1][x];
    if(right>down){
        x++;
        result+=right;
    }else{
        y++;
        result+=down;
    }
}
result=arr[col-1][row-1];
console.log(1-result);