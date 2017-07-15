function SiftHeap(r,k,n){
    let i,j,temp;
    i=k;
    j=2*i+1;
    while(j<n){
        if(j<n-1 && r[j]<r[j+1])    j++;
        if(r[i]>r[j]){
            break;
        }else{
            temp=r[i];
            r[i]=r[j];
            r[j]=temp;

            i=j;
            j=2*i+1;
        }
    }
}
function HeapSort(r,n){
    let i,temp;
    for(i=(n-1)/2;i>=0;i--){
        SiftHeap(r,i,n);
    }
    for(i=1;i<=n-1;i++){
        temp=r[0];
        r[0]=r[n-i];
        r[n-i]=temp;
        SiftHeap(r,0,n-i);
    }
}

