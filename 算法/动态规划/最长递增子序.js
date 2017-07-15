function IncreaseOrder(a,n){
    let i,j,k,index=0;
    let L=[],x=[];
    for(i=0;i<10;i++){
        x[i]=[];
    }
    for(i=0;i<n;i++){
        L[i]=1;
        x[i][0]=a[i];
    }
    for(i=1;i<n;i++){
        let max=1;
        for(j=i-1;j>=0;j--){
            if((a[j]<a[i]) && (max<L[j]+1)){
                x[i]=x[j].slice();
                x[i].push(a[i]);    
                L[i]=x[i].length;  
                max=x[i].length;

                /*for(k=0;k<max-1;k++){
                    x[i][k]=x[j][k];
                }
                x[i][max-1]=a[i];*/
            }
        }
    }
    console.log(x)
    for(i=1;i<n;i++){
        if(L[index]<L[i])   index=i;
    }
    console.log("最长递增子序列是：");
    for(i=0;i<L[index];i++){
        console.log(x[index][i]+"   ");
    }
    return L[index];
}

IncreaseOrder([5,2,8,6,4,6,9,7],8);
