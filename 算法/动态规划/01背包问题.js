function KnapSack(w, v, back) {
    let arr = [];
    let col = w.length - 1; //行  back列
    for (let i = 0; i <= col; i++) {
        arr[i] = [];
        arr[i][0] = 0;
    }
    for (let i = 0; i <= back; i++) {
        arr[0][i] = 0;
    }
    for (let i = 1; i <= col; i++) {
        for (let j = 1; j <= back; j++) {
            if (j < w[i]) {
                arr[i][j] = arr[i - 1][j]
            } else {
                //console.log(v[i-1])
                arr[i][j] = Math.max(arr[i - 1][j], arr[i - 1][j - w[i]] + v[i])
            }
        }
    }
    for (let j = back, i = col; i > 0; i--) {
        if (arr[i][j] > arr[i - 1][j]) {

        }
    }
    console.log(arr)
    return arr[col][back];
}
console.log(KnapSack([, 2, 2, 6, 5, 4], [, 6, 3, 5, 4, 6], 10))