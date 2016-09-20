// JavaScript Document
var WINDOW_WIDTH = 1280;
var WINDOW_HEIGHT = 500;
var RADIUS = 8;
var MARGIN_TOP = 60;
var MARGIN_LEFT = 30;

var endTime=new Date(2016,6,7,15,30,20);
var lastTime=0;
var lastHour,lastMinute,lastSeconds;

var balls = [];
const colors = ["#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC0000"];

window.onload=function(){
	WINDOW_WIDTH=document.body.clientWidth-10;
	WINDOW_HEIGHT=document.documentElement.clientHeight-20;
	MARGIN_TOP=Math.round(WINDOW_HEIGHT/5);
	MARGIN_LEFT=Math.round(WINDOW_WIDTH/10);
	RADIUS=Math.floor(WINDOW_WIDTH*4/5/108);
	console.log(document.body.clientHeight);
	
	var canvas=document.getElementById('canvas');
	var context=canvas.getContext('2d');
	
	canvas.width=WINDOW_WIDTH;
	canvas.height=WINDOW_HEIGHT;
	
	lastTime=getLastTime();
	setInterval(function(){
		rander(context);
		update();
	},50);
}

function update(){
	var nextTime=getLastTime();
	var nextHour=parseInt(nextTime/3600);
	var nextMinute=parseInt((nextTime%3600)/60);
	var nextSeconds=parseInt(nextTime%60);
	if(nextSeconds!=lastSeconds){
		lastTime=nextTime;
		if(parseInt(nextHour/10)!=parseInt(lastHour/10)){
			addBall(MARGIN_LEFT,MARGIN_TOP,parseInt(nextHour/10))
		}
		if(parseInt(nextHour%10)!=parseInt(lastHour%10)){
			addBall(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(nextHour%10))
		}
		if(parseInt(nextMinute/10)!=parseInt(lastMinute/10)){
			addBall(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(nextMinute/10))
		}
		if(parseInt(nextMinute%10)!=parseInt(lastMinute%10)){
			addBall(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(nextMinute%10))
		}
		if(parseInt(nextSeconds/10)!=parseInt(lastSeconds/10)){
			addBall(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(nextSeconds/10))
		}
		if(parseInt(nextSeconds%10)!=parseInt(lastSeconds%10)){
			addBall(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(nextSeconds%10))
		}
	}
	updateBalls();
}

function updateBalls(){
	var a=0;
	for(var i=0;i<balls.length;i++){
		balls[i].x+=balls[i].vx;
		balls[i].y+=balls[i].vy;
		balls[i].vy+=balls[i].g;
		
		if(balls[i].y>= WINDOW_HEIGHT-RADIUS){
			balls[i].y= WINDOW_HEIGHT-RADIUS;
			balls[i].vy=-balls[i].vy*0.8;
		}
	}
	for(var i=0;i<balls.length;i++){
		if(balls[i].x+RADIUS>0&&balls[i].x-RADIUS<WINDOW_WIDTH){
			balls[a++]=balls[i];
		}
	}
	while(balls.length>Math.min(300,a)){
		balls.pop();	
	}
}

function addBall(x,y,num){
	for	(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				var box={
					x:x+j*2*(RADIUS+1)+(RADIUS+1),
					y:y+2*(RADIUS+1)*i+RADIUS+1,
					g:1.5+Math.random(),
					vx:Math.pow(-1,Math.ceil(Math.random()*2))*4,
					vy:-5,
					color:colors[Math.floor(Math.random()*colors.length)]
				}
				balls.push(box);
			}
		}
	}
}

function getLastTime(){
	var currentTime=new Date();
	var l=endTime-currentTime;
	
	return l>=0? l/1000:0;
}

function rander(cxt){
	cxt.clearRect(0,0,WINDOW_WIDTH,WINDOW_HEIGHT)
	lastHour=parseInt(lastTime/(60*60));
	lastMinute=parseInt((lastTime%3600)/60);
	lastSeconds=parseInt(lastTime%60);
	
	randerDigti(MARGIN_LEFT,MARGIN_TOP,parseInt(lastHour/10),cxt);
	randerDigti(MARGIN_LEFT+15*(RADIUS+1),MARGIN_TOP,parseInt(lastHour%10),cxt);
	randerDigti(MARGIN_LEFT+30*(RADIUS+1),MARGIN_TOP,10,cxt);
	randerDigti(MARGIN_LEFT+39*(RADIUS+1),MARGIN_TOP,parseInt(lastMinute/10),cxt);
	randerDigti(MARGIN_LEFT+54*(RADIUS+1),MARGIN_TOP,parseInt(lastMinute%10),cxt);
	randerDigti(MARGIN_LEFT+69*(RADIUS+1),MARGIN_TOP,10,cxt);
	randerDigti(MARGIN_LEFT+78*(RADIUS+1),MARGIN_TOP,parseInt(lastSeconds/10),cxt);
	randerDigti(MARGIN_LEFT+93*(RADIUS+1),MARGIN_TOP,parseInt(lastSeconds%10),cxt);
	
	for(var i=0;i<balls.length;i++){
		cxt.fillStyle=balls[i].color;
		
		cxt.beginPath();
		cxt.arc(balls[i].x,balls[i].y,RADIUS,0,Math.PI*2)
		cxt.closePath();
		
		cxt.fill();
	}
}

function randerDigti(x,y,num,cxt){
	cxt.fillStyle="rgb(0,102,153)";
	
	for(var i=0;i<digit[num].length;i++){
		for(var j=0;j<digit[num][i].length;j++){
			if(digit[num][i][j]==1){
				cxt.beginPath();
				cxt.arc(x+2*(RADIUS+1)*j+RADIUS+1,y+2*(RADIUS+1)*i+RADIUS+1,RADIUS,0,Math.PI*2);
				cxt.closePath();
				
				cxt.fill();
			}
		}
	}
}