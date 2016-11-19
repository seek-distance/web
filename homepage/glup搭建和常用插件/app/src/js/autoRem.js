(function () {
	var iWidth = document.documentElement.clientWidth;
	console.log(iWidth);
	var iFontSize;
	if(iWidth<800){
		iFontSize = iWidth/6.4;/*目前用得多的是除以16*/		
	}else{
		iFontSize = 100;
	}
	console.log("当前设备1rem大小为:"+iFontSize+"px");
	document.getElementsByTagName("html")[0].style.fontSize=iFontSize+"px";
})();

