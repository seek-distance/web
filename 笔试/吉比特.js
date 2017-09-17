var arr='ae31b*0z'.split("");
var re =  /^[0-9a-zA-Z]*$/g;  
if (!re.test(arr.join('')))
{
   return;
}
var str='';
var num='';
arr.map((item)=>{
	if(parseInt(item) || parseInt(item)==0){
        num+=item;
    }else{
        str+=item;
    }
})
console.log(str,num)

/* var arr=readline().split("");
var str='';
var num='';
var re =  /^[0-9a-zA-Z]*$/g;  
if (!re.test(arr.join('')))
{
   return;
}
for(var i=0;i<arr.length;i++){
    item=arr[i];
	if(parseInt(item) || parseInt(item)==0){
        num+=item;
    }else{
        str+=item;
    }
}
var result=str+num;
print(result) */