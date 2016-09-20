// JavaScript Document
window.onload = function(){
	mv.app.toTip();
	mv.app.toBanner();
	mv.app.toSel();
	mv.app.toRun();
	mv.app.timerun();
	mv.app.picrun();
};


var mv={};

mv.tools={};
//通过类名获取标签
mv.tools.getByClass = function(oParent,sClass){
	var aEle = oParent.getElementsByTagName('*');
	var arr = [];
	
	for(var i=0;i<aEle.length;i++){
		if(aEle[i].className == sClass){
			arr.push(aEle[i]);
		}
	}
	
	return arr;
};

//获取标签的样式
mv.tools.getStyle=function(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,false)[attr];
	}
}

//让0转为00
mv.tools.toDou=function(n)
{
	if(n<10){
		n='0'+n;
	}
	return n;
}

mv.ui={};

//实现输入框提示功能，点击后提示文字消失，离开后文字出现
mv.ui.textChange=function(obj,str){
	obj.onfocus=function(){
		if(this.value==str){
			this.value="";
		}
	}
	obj.onblur=function(){
		if(this.value==""){
			this.value=str;
		}
	}
};

//实现图片的淡入
mv.ui.fadeIn=function(obj){
	var iCur=mv.tools.getStyle(obj,'opacity');
	if(iCur==1){return false;}
	else{
		var value=0;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var iSpeed=5;
			if(value==100){
				clearInterval(obj.timer);
			}else{
				value+=iSpeed;
				obj.style.opacity=value/100;
				obj.style.filter='alpha(opacity='+value+')';
			}
		},30)
	}
};

//实现图片的淡出
mv.ui.fadeOut=function(obj){
	var iCur=mv.tools.getStyle(obj,'opacity');
	if(iCur==0){return false;}
	else{
		var value=100;
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var iSpeed=-5;
			if(value==0){
				clearInterval(obj.timer);
			}else{
				value+=iSpeed;
				obj.style.opacity=value/100;
				obj.style.filter='alpha(opacity='+value+')';
			}
		},30)
	}
}

//实现图片的移动
mv.ui.move=function(obj,old,now){
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var iSpeed = (now - old)/10;
		iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
		
		if(now == old){
			clearInterval(obj.timer);
		}
		else{
			old += iSpeed;
			obj.style.left = old + 'px';
		}
		
	},30);
}

mv.app={}

//输入框
mv.app.toTip=function(){
	var text1=document.getElementById('text1');
	var text2=document.getElementById('text2');
	
	mv.ui.textChange(text1,'查找商品');
	mv.ui.textChange(text2,'查找商品');
};

mv.app.toBanner=function(){
	var ad = document.getElementById('ad');
	var li = ad.getElementsByTagName('li');
	
	var prevbg = mv.tools.getByClass(ad,'prev_bg')[0];
	var nextbg = mv.tools.getByClass(ad,'next_bg')[0];
	
	var prev = mv.tools.getByClass(ad,'prev')[0];
	var next = mv.tools.getByClass(ad,'next')[0];
	
	var iNow = 0;
	
	//实现顶部图片的淡入淡出
	var timer = setInterval(auto,3000);
	function auto(){
		
		if(iNow == li.length-1){
			iNow = 0;
		}
		else{
			iNow++;
		}
		
		for(var i=0;i<li.length;i++){
			mv.ui.fadeOut(li[i]);
		}
		
		mv.ui.fadeIn(li[iNow]);
		
	}
	
	//实现图片跳转到上一张
	function autoPrev(){
		
		if(iNow == 0){
			iNow = li.length-1;
		}
		else{
			iNow--;
		}
		
		for(var i=0;i<li.length;i++){
			mv.ui.fadeOut(li[i]);
		}
		
		mv.ui.fadeIn(li[iNow]);
		
	}
	
	//实现鼠标点击，经过，移出应该有的效果
	prevbg.onmouseover = prev.onmouseover = function(){
		prev.style.display = 'block';
		clearInterval(timer);
	};
	
	nextbg.onmouseover = next.onmouseover = function(){
		next.style.display = 'block';
		clearInterval(timer);
	};
	
	prevbg.onmouseout = prev.onmouseout = function(){
		prev.style.display = 'none';
		timer = setInterval(auto,3000);
	};
	
	nextbg.onmouseout = next.onmouseout = function(){
		next.style.display = 'none';
		timer = setInterval(auto,3000);
	};
	
	prev.onclick=function(){
		autoPrev();
	};
	
	next.onclick=function(){
		auto();
	};
};

//下拉框内容的实现
mv.app.toSel = function(){
	var sell = document.getElementById('sel1');
	var dd = sell.getElementsByTagName('dd');
	var ul = sell.getElementsByTagName('ul');
	var h2 = sell.getElementsByTagName('h2');
	
	//实现点击后下拉框的出现
	for(var i=0;i<dd.length;i++){
		dd[i].index = i;
		dd[i].onclick = function(ev){
			var ev = ev || window.event;
			var This = this;
			
			for(var i=0;i<ul.length;i++){
				ul[i].style.display = 'none';
			}
			
			ul[this.index].style.display = 'block';
			
			document.onclick = function(){
				ul[This.index].style.display = 'none';
			};
			
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
			
		};
	}
	
	//实现下拉框内容赋值给顶部
	for(var i=0;i<ul.length;i++){
		ul[i].index=i;
		(function(u){
			var li=u.getElementsByTagName('li');
			
			for(var i=0;i<li.length;i++){
				li[i].onmouseover=function(){
					this.className='active';
				}
				li[i].onmouseout=function(){
					this.className='';
				}
				li[i].onclick=function(event){
					var event=event||window.event;
					h2[this.parentNode.index].innerHTML=this.innerHTML;
					this.parentNode.style.display='none';
					if(event.stopPropagation){
						event.stopPropagation();
					}else{
						event.cancelBubble=true;
					}
				}
			}
			
		})(ul[i]);
	
	}
}

//实现图片点击轮播
mv.app.toRun=function(){
	var run=document.getElementById('run1');
	var ul=run.getElementsByTagName('ul')[0];
	var li=ul.getElementsByTagName('li');
	
	var prev=mv.tools.getByClass(run,'prev')[0];
	var next=mv.tools.getByClass(run,'next')[0];
	
	var iNow=0;
	
	
	ul.innerHTML+=ul.innerHTML;
	
	ul.style.width=li.length*li[0].offsetWidth+'px';
	
	
	prev.onclick=function(){
		if(iNow==0){
			iNow=li.length/2;
			ul.style.left=-ul.offsetWidth/2+'px';
		}
		mv.ui.move(ul,-iNow*li[0].offsetWidth,-(iNow-1)*li[0].offsetWidth);
		
		iNow--;
	}
	
	next.onclick=function(){
		if(iNow==li.length/2){
			iNow=0;
			ul.style.left=0;
		}
		
		mv.ui.move(ul,-iNow*li[0].offsetWidth,-(iNow+1)*li[0].offsetWidth);
		
		iNow++;
	}
}

//实现时间的更新
mv.app.timerun=function(){
	var clock=document.getElementById('clock_day');
	var img=clock.getElementsByTagName('img');
	setInterval(time,1000);
	function time(){
		var date=new Date();
		var str=date.getFullYear()+mv.tools.toDou(date.getMonth()+1)+mv.tools.toDou(date.getDate())+mv.tools.toDou(date.getHours())+mv.tools.toDou(date.getMinutes())+mv.tools.toDou(date.getSeconds());
		for(var i=0;i<img.length;i++)
		{
			img[i].src='images/time/'+str[i]+'.jpg';
		}
	}
}

//实现热卖的滚动
mv.app.picrun=function(){
	var ul=document.getElementById('pic_scroll');
	ul.innerHTML+=ul.innerHTML;
	ul.scrollTop=0;
	var speed=10;
	var time;
	var liHeight=201;
	setTimeout(startScroll,2000);
	
	function startScroll(){
		time=setInterval(move,speed);
		ul.scrollTop++;
	}
	
	function move(){
		if(ul.scrollTop%liHeight==0){
			clearInterval(time);
			setTimeout(startScroll,2000);
		}else{
			ul.scrollTop++;
			if(ul.scrollTop>=ul.scrollHeight/2){
				ul.scrollTop=0;
			}
		}
	}
}