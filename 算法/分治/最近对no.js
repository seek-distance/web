let s=[
    {x:5,y:1},
    {x:12,y:1},
    {x:14,y:1},
    {x:1,y:2},
    {x:3,y:2},
    {x:1,y:2},
    {x:6,y:3},
    {x:7,y:3},
    {x:9,y:3},
    {x:2,y:4},
    {x:12,y:4},
    {x:3,y:4},
    {x:3,y:5},
    {x:9,y:5},
]
console.log(Closest(s,0,14));
function Closest(S,low,high){
    let d1,d2,d3,d;
    let mid,i,j;
    let P=[];
    if(high-low == 1)
        return Distance(S[low],S[high]);
    if(high-low == 2){
        d1=Distance(S[low],S[low+1]);
        d2=Distance(S[low+1],S[high]);
        d3=Distance(S[low],S[high]);
        return Math.min(d1,d2,d3);
    }
    mid = parseInt((low+high)/2);
    d1=Closest(S,low,mid);
    d2=Closest(S,mid+1,high);
    d=Math.min(d1,d2);
    
    for(i=mid;(i>=low) && (S[mid].x-S[i].x<d);i--)
        P.push(S[i]);
    for(i=mid+1;(i<=high) && (S[i].x-S[mid].x<d);i++)
        P.push(S[i]);
    P.sort(function(a,b){
        return a.y-b.y;
    })

    for(i=0;i<P.length;i++){
        for(j=i+1;j<P.length;j++){
            if(P[j].y-P[i].y>=d)
                break;
            else{
                d3=Distance(P[i],P[j]);
                if(d3<d)    d=d3;
            }
        }
    }

    return d;
}

function Distance(a,b){
    return Math.sqrt((a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y));
}