// JavaScript Document
(function(){		
	var Menubar=function(){
		var self=this;
		this.el=document.querySelector('#sidebar ul');
		this.state='allClosed';//hasOpened
		this.el.addEventListener('click',function(e){
			e.stopPropagation();	
		});
		this.menuList=document.querySelectorAll('#sidebar ul>li');
		this.currentOpendMenuContent=null;
		for(var i=0;i<this.menuList.length;i++){
			this.menuList[i].addEventListener('click',function(e){
				var menuContentEl=document.getElementById(e.currentTarget.id+'-content');
				if(self.state==='allClosed'){
					menuContentEl.style.top='0';
					menuContentEl.style.left='-85px';
					menuContentEl.className='nav-content menuContent-move-right';
					self.state='hasOpened';
					self.currentOpendMenuContent=menuContentEl;
				}else{
					//关闭之前打开的页面
					self.currentOpendMenuContent.className='nav-content menuContent-move-left';
					self.currentOpendMenuContent.style.top='0';
					self.currentOpendMenuContent.style.left='35px';
					//打开要打开的页面
					menuContentEl.className='nav-content menuContent-move-up';
					menuContentEl.style.top='250px';
					menuContentEl.style.left='35px';
					self.currentOpendMenuContent=menuContentEl;
				}
			});
		}
		this.menuContentList=document.querySelectorAll('.nav-content>div.nav-con-close');
		for(i=0;i<this.menuContentList.length;i++){
			this.menuContentList[i].addEventListener('click',function(e){
				var menuContent=e.currentTarget.parentNode;
				menuContent.className='nav-content menuContent-move-left';
				menuContent.style.top='0';
				menuContent.style.left='35px';
				self.state='allClosed';
			});
		}
	};
	Menubar.prototype.close=function(){
		this.state='allClosed';
	}
	var Sidebar=function(eId,closeBarId){
		var self=this;
		this.state='opened';
		this.el=document.getElementById(eId||'sidebar');
		this.closeBarEl=document.getElementById(closeBarId||'closeBar');
		this.menubar=new Menubar();
		this.el.addEventListener('click',function(event){
			if(event.target!==self.el){
				self.triggerSwitch();
			}
		});
	};
	Sidebar.prototype.close=function(){
		this.el.style.left='0px';
		this.el.className='sidebar-move-left';
		this.closeBarEl.style.left='0px';
		this.closeBarEl.className='closeBar-move-right';
		this.state='closed';
	};
	Sidebar.prototype.open=function(){
		this.el.style.left='-120px';
		this.el.className='sidebar-move-right';
		this.closeBarEl.style.left='160px';
		this.closeBarEl.className='closeBar-move-left';
		this.state='opened';
	};
	Sidebar.prototype.triggerSwitch=function(){
		var navContent=document.querySelectorAll(".nav-content");
		if(this.state==='opened'){
			this.close();
			for(var i=0;i<navContent.length;i++){
				if(getComputedStyle(navContent[i],false)["opacity"]==1){
					navContent[i].className="nav-content menuContent-move-left";
					this.menubar.close();
				}
			}
		}else{
			this.open();
		}
	}
	var sidebar=new Sidebar();
})();
