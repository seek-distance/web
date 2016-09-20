// JavaScript Document

//通过类名获取函数（数组）
function getByClassName(parentId,cls){
	var parent=document.getElementById("parentId");
	var all=parent.getElementsByTagName("*");
	var arr=[];
	for(var i=0;i<all.length;i++){
		if(all[i].className=="cls"){
			arr.push(all[i]);
		}
	}
	return arr;
}

//添加事件
function addEvent(obj,type,handler){
	if(obj.addEventListener){
		obj.addEventListener(type,handler,false);
	}else if(obj.attachEvent){
		obj.attachEvent(on+"type",handler);
	}else{
		obj['on'+type]=handler;
	}
}

//阻止事件冒泡
function stopEvent(event){
	var e=arguments.callee.caller.arguments[0]||event;
	if(e&&e.stopPropagation){
		e.stopPropagation();
	}else{
		window.event.cancelBubble=true;
	}
}

