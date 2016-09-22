// JavaScript Document
$(function(){
	cleanSearch();
	move(0);
	start(1);
	mouse();
})
var time;

//页面的定位和序号的定位
function move(i){
	var ul=$('.m_top ul');
	var a=$('.num a');
	var li=$('.m_top li');
	ul.css({
		left:-i*li.eq(0).outerWidth()	
	});
	a.each(function(index) {
		$(this).removeClass();
	});
	a.eq(i).addClass('on');
}

//设置页面的跳转
function start(i){
	time=setInterval(function(){
		move(i);
		if(i>2){
			i=0;
		}else{
			i++;	
		}
	},2000);
}


//设置鼠标事件
function mouse(){
	var a=$('.num a');
	var li=$('.m_top li');
	li.each(function(index) {
		li.eq(index).bind('mouseover',function(){
			clearInterval(time);
		});
		li.eq(index).bind('mouseout',function(){
			var i=$(this).index()+1;
			if(i==li.length)  i=0;
			start(i);
		});
	});
	a.each(function(index) {
		a.eq(index).bind('mouseover',function(){
			clearInterval(time);
			move($(this).index());
		});
		a.eq(index).bind('mouseout',function(){
			var i=$(this).index()+1;
			if(i==4)	i=0;
			start(i);
		});
	});
}

function cleanSearch(){
	$('.text').focus(function(){
		$(this).val("");
	})
	$('.text').blur(function(){
		$(this).val("查找商品");
	})
}
