window.ele=[];
var jQuery=function(str){
	ele=document.querySelectorAll(str);
	return ele;
}
jQuery.prototype = {
	
};

var _$=function(str){
	new jQuery(str);
}
_$.prototype.get=function(){
	console.log("$.get")
}
var s=new $;
s.get();