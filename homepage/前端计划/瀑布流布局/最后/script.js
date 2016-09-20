// JavaScript Document
$(function(){
	start();
	setTimeout(waterfall,3000);
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]};
	$(window).scroll(function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(index,value){
				var box=$('<div>').addClass('box').appendTo($('#main'));
				var pic=$('<div>').addClass('pic').appendTo(box);
				var img=$('<img>').attr('src','../images/'+$(value).attr('src')).appendTo(pic);
			})
			waterfall();
		}
	})
	
})

function start(){
	var $boxs=$("#main .box");
	var clientH=($(window).height()<200)?$(window).height():$(window).height()-200;
	var clientW=($(window).width()<200)?$(window).width():$(window).width()-200;
	$boxs.each(function(index) {
		$boxs.eq(index).css("position","absolute");
		var top=Math.floor(Math.random()*clientH);
		var left=Math.floor(Math.random()*clientW);
		$boxs.eq(index).css({"top":top,"left":left});
	});
}

function waterfall(){
	 var boxs=$("#main .box");
	 var boxW=boxs.eq(0).outerWidth();
	 var cols=Math.floor($(window).width()/boxW);
	 $("#main").width(cols*boxW);
	 var hArr=[];
	 boxs.each(function(index,value) {
		var boxH=boxs.eq(index).outerHeight();
		if(index<cols){
			boxs.eq(index).css({'top':0,'left':index*boxW+'px'});
			hArr.push(boxH);
		}else{
			var minH=Math.min.apply(null,hArr);
			var minIndex=$.inArray(minH,hArr);
			$(value).css({
				'position':'absolute',
				'top':minH+'px',
				'left':minIndex*boxW+'px'
			});
			hArr[minIndex]+=boxH;
		}
	});
}

function checkScrollSlide(){
	var lastbox=$('#main .box').last();
	var height=lastbox.offset().top+ Math.floor(lastbox.outerHeight()/2);
	var sum=$(window).scrollTop()+$(window).height();
	return (sum>height)?true:false;
}