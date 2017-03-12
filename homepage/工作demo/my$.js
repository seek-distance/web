/*window.ele=[];
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
s.get();*/

;(function(window,document){
	function $(str,context){	//context为dom结构
		var context = context || document;
		if ( !(this instanceof $) ) {
			return (new $(str,context));
		}
		this.ele = context.querySelectorAll(str);
		return this;
	}
	window.$=$;
	$.fn=$.prototype;
})(window,document)

;(function(fn){
	
})($.fn)


console.log($('#test'))
