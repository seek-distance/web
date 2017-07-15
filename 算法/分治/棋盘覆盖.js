let t=0;
let size=4;
let board=[];
for(let i=0;i<size;i++){
    board[i]=[];
}
ChessBoard(0,0,1,1,size);
console.log(board);

function ChessBoard(tr,tc,dr,dc,size){
    let s,t1;
    if(size==1) return;
    t1=++t;
    s=size/2;

    //左上角
    if(dr<tr+s && dc<tc+s){
        ChessBoard(tr,tc,dr,dc,s);
    }else{
        board[tr+s-1][tc+s-1]=t1;
        ChessBoard(tr,tc,tr+s-1,tc+s-1,s);
    }

    //右上角
    if(dr<tr+s && dc>=tc+s){
        ChessBoard(tr,tc+s,dr,dc,s);
    }else{
        board[tr+s-1][tc+s]=t1;
        ChessBoard(tr,tc+s,tr+s-1,tc+s,s);
    }
    
    //左下角
    if(dr>=tr+s && dc<tc+s){
        ChessBoard(tr+s,tc,dr,dc,s);
    }else{
        board[tr+s][tc+s-1]=t1;
        ChessBoard(tr+s,tc,tr+s,tc+s-1,s);
    }
    
    //右上角
    if(dr>=tr+s && dc>=tc+s){
        ChessBoard(tr+s,tc+s,dr,dc,s);
    }else{
        board[tr+s][tc+s]=t1;
        ChessBoard(tr+s,tc+s,tr+s,tc+s,s);
    }
}