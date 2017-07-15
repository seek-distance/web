function Merge(r,r1,m,t){
    let i=s,j=m+1,k=s;
    while(i<=m && j<=t){
        if(r[i]<=r[j])  r1[k++]=r[i++];
        else r1[k++] = r[j++];
    }
    while(i<=m)
        r1[k++] = r[i++];
    while(j<=t)
        r1[k++] = r[j++];
}
function MergeSort(r,s,t){
    let m;
    let r1=new Array();
    if(s==t)    return;
    else{
        m=(s+t)/2;
        MergeSort(r,s,m);
        MergeSort(r,m+1,t);
        MergeSort(r,r1,s,m,t);
        for(let i=s;i<=t;i++)
            r[i] = r1[i];
    }
    console.log(r);
}
MergeSort([8,3,2,6,7,1,5,4],1,8);
