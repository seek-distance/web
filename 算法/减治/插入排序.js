function InsertSort(r,n){
    for(let i=2;i<=n;i++){
        r[0]=r[i];
        for(var j=i-1;r[0]<r[j];j--){
            r[j+1]=r[j];
        }
        r[j+1]=r[0];
    }
    console.log(r)
}

var r=[,12,15,9,20,10,6];
InsertSort(r,6)