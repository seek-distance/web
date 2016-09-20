$(function(){
	selectA();
	more();
	uldisplay();
})

function selectA(){
	var a=$("#select a");
	a.each(function(index) {
		if(a.eq(index).attr("class")!="unlimited" && a.eq(index).parent().parent().attr("class")!="first_item"){
			a.eq(index).bind("click",function(){
				$(this).parent().parent().find("a").each(function(index){
					$(this).css({background:"none",color:"#107ad9",height:"20px"});
				});
				$(this).parent().parent().parent().find(".unlimited").css({
					background:"none",color:"#107ad9"
				});
				$(this).css({
					background:"#107ad9",
					color:"#fff",
					display:"inline-block",
					height:"20px"
				});
			})
		}else if(a.eq(index).parent().parent().attr("class")=="first_item"){
			a.eq(index).bind("click",function(){
				$(this).parent().parent().find("a").css({
					background:"none",color:"#107ad9",height:"20px"
				});
				$(this).css({
					background:"#107ad9",
					color:"#fff",
					display:"inline-block",
					height:"20px"
				});
			});
		}else{
			a.eq(index).bind("click",function(){
				$(this).css({
						background:"#107ad9",
						color:"#fff",
						display:"inline-block",
						height:"20px"
				});
				$(this).parent().find("div a").css({
					background:"none",color:"#107ad9",height:"20px"
				});
			});
		}
	});
}

function more(){
	var more=$(".more");
	more.each(function(index) {
		more.eq(index).bind("click",function(){
			if($(this).html()=="收起︿"){
				$(this).html("更多ν")
				$(this).parent().find(".hide").hide();
			}else{
				$(this).html("收起︿")
				$(this).parent().find(".hide").css("display","inline-block");
			}
		});
	});
	
}

function uldisplay(){
	var p=$(".last_item p");
	var ul=$(".last_item ul");
	p.each(function(index) {
		p.eq(index).click(function(event){
			var e=event||window.event;
			ul.each(function(index) {
				ul.eq(index).hide();
			});
			ul.eq($(this).index()-1).show();
			if(e.stopPropagation){
				e.stopPropagation();
			}else{
				e.cancelBubble=true;
			}
		});
	});
	$(document).click(function(){
		ul.each(function(index) {
			ul.eq(index).hide();
		});
	})
	ul.each(function(index) {
		var li=$(this).find("li");
		li.each(function(index) {
			li.eq(index).click(function(){
				p.eq($(this).parent().index()-3).html($(this).html());
			});
		});
	});
	
}