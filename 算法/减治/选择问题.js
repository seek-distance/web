function Partition(r,low,high){
    let i=low,j=high;
    while(i<j){
        while(i<j && r[i]<=r[j])    j--;
        if(i<j){
            let temp=r[i];
            r[i] = r[j];
            r[j] = temp;
            i++;
        }
        while(i<j && r[i]<=r[j])    i++;
        if(i<j){
            let temp=r[i];
            r[i] = r[j];
            r[j] =temp;
            j--;
        }
    }
    return i;
}
function SelectMink(r,low,high,k){
    let s;
    s=Partition(r,low,high);
    console.log(r)
    if(s==k)
        return r[s];
    if(s>k)
        return SelectMink(r,low,s-1,k);
    else
        return SelectMink(r,s+1,high,k);
}

console.log(SelectMink([5,3,8,4,6,9,2,7],0,7,7))