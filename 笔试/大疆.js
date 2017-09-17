var length=readInt();
var arr=[];
for(var i=0;i<length;i++){
    arr[i]=read_line();
} 
/* var arr=[
    '08.10 01:00:00',
    '08.09 23:59:59',
    '08.10 17:00:00',
    '08.10 18:00:00',
    '08.01 01:00:00',
    '08.01 04:00:00',
    '08.03 10:00:00',
    '08.03 12:29:59',
    '08.04 10:00:00',
    '08.04 12:30:00',
    '08.07 01:00:00',
    '08.07 02:00:00'
] */

var list={};
for (var i = 1; i < arr.length; i++) {
    if(!list[arr[i].slice(0,5)])    list[arr[i].slice(0,5)]=[];
    list[arr[i].slice(0,5)].push(new Date(arr[i]).getTime()) 
}
//console.log(list)
for(var key in list){
    if(list[key].length<2)  continue;
    var max=Math.max(...list[key]);
    var min=Math.min(...list[key]);
    console.log(key+' '+(max-min)/1000 );
}