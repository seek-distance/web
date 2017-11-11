function Partition(r,first,end){
    let i=first,j=end;
    while(i<j){
        //右扫描
        while(i<j && r[i]<=r[j])    j--;
        if(i<j){
            [r[j],r[i]] = [r[i],r[j]];
            i++;
        }
        //左扫描
        while(i<j && r[i]<=r[j])    i++;
        if(i<j){
            [r[j],r[i]] = [r[i],r[j]];
            j--;
        }
    }
    return i;
}

function QuickSort(r,first,end){
    let pivot;
    if(first<end){
        pivot=Partition(r,first,end);
        QuickSort(r,first,pivot-1);
        QuickSort(r,pivot+1,end);
        console.log(r);
    }
}

QuickSort([23,13,35,6,19,50,28],0,6)