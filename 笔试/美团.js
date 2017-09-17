var arr=["aabbccdd",'ABCde0','ABCedf012345','0988763333333'];

arr.map(item=>{
    if(test(item)) console.log("YES")
    else    console.log("NO")
})

function test(str){
    if(!/[a-z0-9A-z]/.test(str)) return false;
    if(/^\d.*?$/.test(str))   return false;
    var number=0;
    if(/[a-z]/.test(str))   number++;
    if(/[A-Z]/.test(str))   number++;
    if(/[0-9]/.test(str))   number++;
    if(number<2)    return false;
    if(str.length<8)    return false;
    return true;
}