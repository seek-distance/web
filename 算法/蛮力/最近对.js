function closestPoints(x,y){
    let index1,index2;
    let d,minDist=1000;
    let n=x.length;
    for(let i=0;i<n-1;i++){
        for(let j=i+1;j<n;j++){
            d=(x[i]-x[j]) * (x[i]-x[j]) + (y[i]-y[j]) * (y[i]-y[j]);
            if(d<minDist){
                minDist = d;
                index1=i;
                index2=j;
            }
        }
    }
    console.log("最近点对是："+index1+","+index2);
    console.log(minDist)
    return minDist;
}
closestPoints([5,8,7,6,9,2],[9,6,7,1,5,2]);
