const N=8;
let a=[2,2,2,2,2,2,1,2,2];
console.log(Coin(0,8,9));
function Coin(low,high,n){
    let i,num1,num2,num3;
    let add1=0,add2=0;
    if(n==1)    return low+1;
    if(n%3==0)  num1=num2=n/3;
    else    num1=num2=n/3+1;
    num3=n-num1-num2;
    for(i=0;i<num1;i++){
        add1 += a[low+i];
    }
    for(i=num1;i<num1+num2;i++){
        add2 += a[low+i]
    }
    if(add1<add2)   return Coin(low,low+num1-1,num1);
    else if(add1>add2)  return Coin(low+num1,low+num1+num2-1,num2);
    else    return Coin(low+num1+num2,high,num3);
}