let c = [
    [999, 3, 3, 2, 6],
    [3, 999, 7, 3, 2],
    [3, 7, 999, 2, 5],
    [2, 3, 2, 999, 3],
    [6, 2, 5, 3, 999]
]
var e=change(c);
console.log(e);

test(e,c)
function change(c){
    let e = [];
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if (i != j) {
                let item = {
                    from: i + 1,
                    to: j + 1,
                    value: c[i][j]
                }
                e.push(item);
            }
        }
    }
    let sortlist = ["from", "value"];
    for(let li in sortlist){
        let i, j, temp, len=e.length;
        for(i=0; i<len-1; i++){
            for(j=0; j<len-1-i; j++){
                if(e[j][sortlist[li]] > e[j+1][sortlist[li]]){
                    temp = e[j];
                    e[j] = e[j+1]; 
                    e[j+1] = temp;
                }
            }
        }
    }

    return e;
}

function test(e,c) {
    let p = []; //存储经过的边
    tspLength = 0;
    let ee = e; //所有未选取的边

    while (p.length < c.length) {
        let flag = false;
        let index = 0;
        while(!flag){
            let item=ee[index];
            if(insert(p,item,c)){
                p.push(item);
                ee.splice(index,1);
                break;
            }
            index++;
        }
    }
    console.log(p);
    return p;
}

function insert(p, item, c) {
    if (p.length != c.length - 1 && p[0] && p[0].from == item.to) return false;
    for (let j = 0; j < p.length; j++) {
        if (p[j].from == item.to && p[j].to == item.from) return false;
        if (p[j].from == item.from || p[j].to == item.to) return false;
    }
    return true;
}
