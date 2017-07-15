function TSP1(arc,w){
    let n=arc.length;
    let edgeCount=0,TSPLength=0;
    let min,u,v;
    let flag=[];
    for(let i=0;i<n;i++){
        flag[i]=0;
    }
    u=w;flag[w]=1;
    while(edgeCount<n-1){
        min=100;
        for(let j=0;j<n;j++){
            if(!flag[j] && (arc[u][j]!=0) && (arc[u][j]<min)){
                v=j;
                min=arc[u][j];
            }
        }
        TSPLength += arc[u][v];
        flag[v]=1;
        edgeCount++;
        console.log(u+"-->"+v);
        u=v;
    }
    console.log(v+"-->"+w);
    return (TSPLength+arc[u][w]);
}

let arc=[
    [1000,3,3,2,6],
    [3,1000,7,3,2],
    [3,7,1000,2,5],
    [2,3,2,1000,3],
    [6,2,5,3,1000]
]

TSP1(arc,1);