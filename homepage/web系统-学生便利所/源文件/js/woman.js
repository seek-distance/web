// JavaScript Document
$(function(){
	cleanSearch();
	$(window).scroll(function(){
		start();
	});
})

function start(){
	var scrollTop=$(window).scrollTop();
	var div=$('.main div');
	var menu=$('#menu');
	var currentId='';
	div.each(function(index) {
		var top=div.eq(index).offset().top;
		if(scrollTop>top-200){
			currentId='#'+$(this).attr('id');
		}else{
			return false;
		}
	});
	var on=$('.on');
	if(currentId && on.attr('href')!=currentId){
		console.log(1);
		on.removeClass();
		menu.find("[href="+currentId+"]").addClass("on");
	}
}

function cleanSearch(){
	$('.text').focus(function(){
		$(this).val("");
	})
	$('.text').blur(function(){
		$(this).val("查找商品");
	})
}