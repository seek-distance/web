function bubbleSort(arr){
    console.time('冒泡排序时间')
    arr.forEach(function(element,i) {
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    });
    console.timeEnd('冒泡排序时间');
    console.log(arr);
}
function bubbleSort1(arr){
    console.time('1.改进冒泡排序时间');
    let i=arr.length -1;
    while(i>0){
        var pos=0;
        arr.forEach(function(e,j) {
            if(e>arr[j+1]){
                pos=j;
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        });
        i=pos;
    }
    console.timeEnd('1.改进冒泡排序时间');
    console.log(arr);
}
function bubbleSort2(arr){
    let low=0;
    let high=arr.length-1;
    let j;
    console.time('2.改进冒泡排序时间');
    while(low<high){
        for(j=low;j<high;j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
        high--;
        for(j=high;j>low;j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
            }
        }
        low++;
    }
    console.timeEnd('2.改进冒泡排序时间');
    console.log(arr);
}
function selectionSort(arr){
    console.time('选择排序耗时');
    for(let i=0;i<arr.length-1;i++){
        let minIndex=i;
        for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[minIndex])    minIndex=j;
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]];
    }
    console.timeEnd('选择排序耗时');
    console.log(arr);
}
function insertSort(arr){
    console.time('插入排序耗时');
    for(let i=1;i<arr.length;i++){
        let key=arr[i];
        let j=i-1;
        while (j>=0 && arr[j]>key) {
            arr[j+1]=arr[j];
            j--;
        }
        arr[j+1] = key;
    }
    console.timeEnd('插入排序耗时');
    console.log(arr);
}
function binaryInsertionSort(arr){
    console.time('二分插入排序耗时：');
    for(let i=1;i<arr.length;i++){
        let key=arr[i],left=0,right=i-1;
        while (left <= right) {
            let middle = parseInt((left + right)/2);
            if(key < arr[middle]){
                right=middle-1;
            }else{
                left=middle + 1;
            }
        }
        for(let j=i-1;j>=left;j--){
            arr[j+1]=arr[j];
        }
        arr[left]=key;
    }
    console.timeEnd('二分插入排序耗时：');
    console.log(arr);
}
let arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
bubbleSort(arr.slice());
bubbleSort1(arr.slice());
bubbleSort2(arr.slice());
selectionSort(arr.slice());
insertSort(arr.slice());
binaryInsertionSort(arr.slice());