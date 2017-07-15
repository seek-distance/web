function MaxSum(a,left,right){
    let sum=0,midSum=0,leftSum=0,rightSum=0;
    let center,s1,s2,lefts,rights;
    if(left == right)
        sum=a[left];
    else{
        center=parseInt((left+right)/2);
        leftSum=MaxSum(a,left,center);
        rightSum=MaxSum(a,center+1,right);
        
        s1=0;lefts=0;
        for(let i=center;i>=left;i--){
            lefts+=a[i];
            if(lefts>s1)    s1=lefts;
        }
        s2=0;rights=0;
        for(let j=center+1;j<=right;j++){
            rights+=a[j];
            if(rights>s2)   s2=rights;
        }
        midSum=s1+s2;
        sum=Math.max(leftSum,midSum,rightSum);
    }
    return sum;
}
console.log(MaxSum([-20,11,-4,13,-5,-2],0,5));
