function KnapSack(w,v,n,C){
    let x=[];
    for(let i=0;i<10;i++){
        x[i]=0;
    }
    let maxValue=0;
    for(let i=0;w[i]<C;i++){
        x[i]=1;
        maxValue += v[i];
        C=C-w[i];
    }
    x[i]=parseFloat(C/w[i]);
    maxValue += x[i] * v[i];
    return maxValue;
}
