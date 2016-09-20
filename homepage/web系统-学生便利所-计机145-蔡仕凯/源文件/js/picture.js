// JavaScript Document
$(function(){
	start();
	setTimeout(waterfall,2000);
	cleanSearch();
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'},{"src":'5.jpg'},{"src":'6.jpg'},{"src":'7.jpg'},{"src":'8.jpg'},{"src":'9.jpg'},{"src":'10.jpg'}]};
	$(window).scroll(function(){
		if(checkScrollSlide()){
			$.each(dataInt.data,function(index,value){
				var box=$('<div>').addClass('box').appendTo($('.main'));
				var pic=$('<div>').addClass('pic').appendTo(box);
				//var img=$('<img>').attr('src','images/beautiful pic/'+$(value).attr('src')).appendTo(pic);
				var img=$('<img>').attr('src','images/beautiful pic/'+$(value).attr('src')).appendTo(pic);
			});
			waterfall();
		}
	})
})

function start(){
	var boxs=$('.box');
	var contentH=$('.newscontent').outerHeight()-300;
	var contentW=$('.newscontent').outerWidth()-300;
	boxs.each(function(index) {
		boxs.eq(index).css("position","absolute");
		var boxH=Math.floor(Math.random()*contentH);
		var boxW=Math.floor(Math.random()*contentW);
		boxs.eq(index).css({top:boxH,left:boxW});
	})
}

function waterfall(){
	var boxs=$('.box');
	var mainW=$('.main').width();
	var boxW=boxs.eq(1).outerWidth();
	var cols=Math.floor(mainW/boxW);
	var hArr=[];
	boxs.each(function(index,value) {
		var boxH=boxs.eq(index).outerHeight();
		if(index<cols){
			boxs.eq(index).css({top:0,left:index*boxW+'px'});
			hArr.push(boxH);
		}else{
			var minH=Math.min.apply(null,hArr);
			var minIndex=$.inArray(minH,hArr);
			$(value).css({
				top:minH,
				left:minIndex*boxW+'px',
				position:'absolute'
			});
			hArr[minIndex]+=boxH;
		}
	});
}

function checkScrollSlide(){
	var lastH=$('.box').last().offset().top+Math.floor($('.box').last().outerHeight()/2);
	var scrollH=$(window).scrollTop()+$(window).height();
	return (scrollH>lastH)?true:false;
}

function cleanSearch(){
	$('#text1').focus(function(){
		$(this).val("");
	})
	$('#text1').blur(function(){
		$(this).val("查找商品");
	})
}