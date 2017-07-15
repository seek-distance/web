function BinSearch1(r,n,k){
    let low=0,high=n-1;
    let mid;
    while(low<=high){
        mid=parseInt((low+high)/2);
        if(k<r[mid]){
            high=mid-1;
        }else if(k>r[mid]){
            low=mid+1;
        }else{
            return mid;
        }
    }
    return 0;
}

console.log(BinSearch1([7,14,18,21,23,29,31,35,38],9,14))
