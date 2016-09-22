$(function(){
	cleanSearch();
})

function cleanSearch(){
	$('.text').focus(function(){
		$(this).val("");
	})
	$('.text').blur(function(){
		$(this).val("查找商品");
	})
}

myFocus.set({
	id:'picBox'
});