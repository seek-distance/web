// JavaScript Document
function startMove(obj,json,fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var flag=true;
		for(var attr in json)
		{
			//1.取当前值
			var icur=0;
			if(attr=='opacity'){
				icur=Math.round(parseFloat(getStyle(obj,attr))*100);
			}else{
				icur=parseInt(getStyle(obj,attr));
			}
			//算速度
			var speed=(json[attr]-icur)/8;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);
			
			if(icur!=json[attr]){
					flag=false;
			}
			if(attr=="opacity"){
				obj.style.opacity=(icur+speed)/100;
			}else{
				obj.style[attr]=icur+speed+'px';
			}
		}
		//检测停止
		if(flag){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
	},30)
}
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}