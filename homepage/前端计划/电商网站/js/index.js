// JavaScript Document
$(function(){
	menu();
	move()
})

//二级菜单效果
function menu(){
	$(".menu_left").each(function(index, element) {
		$(".menu_left").eq(index).bind("mouseover",function(){
			$(this).parent().find(".menu_right").show();
			$(this).addClass("on");
		});
		$(".menu_left").eq(index).bind("mouseout",function(){
			$(this).parent().find(".menu_right").hide();
			$(this).removeClass("on");
		});
	});
	$(".menu_right").each(function(index, element) {
		$(".menu_right").eq(index).bind("mouseover",function(){
			$(this).show();
			$(this).parent().find(".menu_left").addClass("on");
		});
		$(".menu_right").eq(index).bind("mouseout",function(){
			$(this).hide();
			$(this).parent().find(".menu_left").removeClass("on");
		});
	});
}

//轮播图
function move(){
	navmove(0);
	startmove(1);
	mouse();
	//滚动效果
	var time;
	var ul=$(".picture ul");
	var li=$(".picture li");
	var liW=li.eq(0).outerWidth();
	ul.css("width",liW*li.length);
	function navmove(i){
		var ul=$(".picture ul");
		var li=$(".picture li");
		var a=$(".num a");
		var liW=li.eq(0).outerWidth();
		ul.css("left",-i*liW);
		a.each(function(index) {
			a.eq(index).removeClass();
		});
		a.eq(i).addClass('on');
	}
	
	function startmove(i){
		var li=$(".picture li");
		time=setInterval(function(){
			navmove(i);
			if(i<li.length-1){
				i++;
			}else{
				i=0;
			}
		},2000)
	}
	
	function mouse(){
		var li=$(".picture li");
		var a=$(".num a");
		li.each(function(index) {
			li.eq(index).bind("mouseover",function(){
				clearInterval(time);
			});
			li.eq(index).bind("mouseout",function(){
				var i=$(this).index()+1;
				if(i==li.length)	i=0
				startmove(i);
			});
		});
		a.each(function(index) {
			a.eq(index).bind("mouseover",function(){
				clearInterval(time);
				navmove($(this).index());
			});
			a.eq(index).bind("mouseout",function(){
				var i=$(this).index()+1;
				if(i==a.length)	i=0;
				startmove(i);
			});
		});
	}	
}

