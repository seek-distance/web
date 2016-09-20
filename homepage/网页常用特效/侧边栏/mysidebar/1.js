// JavaScript Document
(function(){
	var Menubar=function(){
		var This=this;
		this.state="allClose";
		this.li=document.getElementsByClassName("item");
		this.hasOpenMenu=null;
		for(var i=0;i<this.li.length;i++){
			this.li[i].onclick=function(){
				var liContent=document.getElementById(this.id+"-content");
				if(This.state==="allClose"){
					liContent.className="nav-content nav-right";
					This.state="hasOpen";
					This.hasOpenMenu=liContent;
				}else{
					//关闭之前的内容
					This.hasOpenMenu.className="nav-content nav-left";
					//打开新的内容
					liContent.className="nav-content nav-up";
					This.hasOpenMenu=liContent;
				}
			}
		}
		this.navClose=document.getElementsByClassName("nav-con-close");
		for(i=0;i<this.navClose.length;i++){
			this.navClose[i].onclick=function(){
				this.parentNode.className="nav-content nav-left";
				This.state="allClose";
			}
		}
	}
	Menubar.prototype.close=function(){
		this.state="allClose";
	}
	var menubar=new Menubar();
	var Sidebar=function(menu,closeBar){
		this.closeBar=document.getElementById('closeBar'||closeBar);
		this.menu=document.getElementById('sidebar'||menu);
		this.state="open";
		var This=this;
		this.closeBar.onclick=function(){
			This.menuChange();	
		}
	}
	Sidebar.prototype.close=function(){
		this.menu.className="sidebar-left";
		this.closeBar.className="closebar-right";
	}
	Sidebar.prototype.open=function(){
		this.menu.className="sidebar-right";
		this.closeBar.className="closebar-left";
	}
	Sidebar.prototype.menuChange=function(){
		if(this.state=="open"){
			this.close();
			this.state="close";
			var navContent=document.getElementsByClassName("nav-content");
			for(var i=0;i<navContent.length;i++){
				if(getComputedStyle(navContent[i],false)["opacity"]==1){
					navContent[i].className="nav-content nav-left";
					menubar.close();
				}
			}
		}else{
			this.open();
			this.state="open";
		}
	}
	var sidebar=new Sidebar();
})()

