(function () {
	var iWidth = document.documentElement.clientWidth;
	console.log(iWidth);
	if(iWidth<800){
		var iFontSize = iWidth/6.4;/*目前用得多的是除以16*/		
	}else{
		var iFontSize = 100;
	}
	console.log("当前设备1rem大小为:"+iFontSize+"px");
	document.getElementsByTagName("html")[0].style.fontSize=iFontSize+"px";
})();

