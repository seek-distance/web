// JavaScript Document
$(function(){
	var top=$('.top a');
	var mes=$('.mes ul');
	top.each(function(index) {
		top.eq(index).bind('mouseover',function(){
			$('.on').removeClass();
			$(this).addClass('on');
			mes.each(function(index) {
				mes.eq(index).addClass('mesout')
			});
			mes.eq(index).removeClass();
		});
	});
})