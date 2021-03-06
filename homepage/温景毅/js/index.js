var leftBtn=function(){
	this.leftBtn=document.getElementsByClassName('fixLeftbtn')[0];
	this.conLeft=document.getElementsByClassName('content-left')[0];
	this.conRight=document.getElementsByClassName('content-right')[0];
	this.fix=document.getElementsByClassName('fix')[0];
	this.header=document.getElementsByClassName('header')[0];
	this.leftItem=document.querySelectorAll('.classify li');
	this.iWidth = document.documentElement.clientWidth;

	this.bindEle();
	if (this.iWidth<800) {
		this.bindPhone();
	}
}
leftBtn.prototype={
	bindPhone:function(){
		var self=this;
		for (var i = 0; i < this.leftItem.length; i++) {
			this.leftItem[i].addEventListener('click',function(){
				self.leftClose(self);
			})
		};
		this.fix.addEventListener('click',function(){
			self.leftBtn.style.display='block';
		});
	},
	bindEle:function(){
		var self=this;
		this.leftBtn.addEventListener('click',function(){
			if (this.style.left=='2rem') {
				self.leftClose(self);
			}else{
				self.leftOpen(self);
			}					
		});
		this.fix.addEventListener('click',function(){
			self.leftClose(self);
		})
	},
	leftClose:function(self){
		self.leftBtn.style.left='0.01rem';
		self.leftBtn.style.background='#D6D8DA url(img/btn_r.png) no-repeat center center';
		self.leftBtn.style.marginLeft='0';
		self.conLeft.style.left='-2rem';
		self.header.style.transform=self.conRight.style.transform='translateX(0rem)';
		self.fix.style.display='none';
		self.fix.style.left='0rem';
	},
	leftOpen:function(self){
		self.leftBtn.style.left='2rem';
		self.leftBtn.style.background='url(img/btn_l.png) no-repeat center center';
		self.leftBtn.style.marginLeft='-20px';
		self.conLeft.style.left='0rem';
		self.header.style.transform=self.conRight.style.transform='translateX(2rem)';
		self.fix.style.display='block';
		self.fix.style.left='2rem';
	}
}


var tab=function(parent){
	this.winH=document.documentElement.clientHeight;
	this.header=document.getElementsByClassName('header')[0];
	this.leftItem=parent.querySelectorAll('.classify li');
	this.contentRight=parent.querySelector('.content-right');
	this.rightItem=parent.querySelectorAll('.content-right .dlp-item');
	this.hasComplete=true;

	this.init();
	this.bindEle();
}
tab.prototype={
	init:function(){
		var headerH=this.header.offsetHeight;
		this.contentRight.style.minHeight=(this.winH-headerH)+'px';
	},
	bindEle:function(){
		var self=this;
		for (var i = 0; i < this.leftItem.length; i++) {
			this.leftItem[i].index=i;
			this.leftItem[i].addEventListener('click',function(){
				if(self.hasComplete){
					self.hasComplete=false;
					for (var j = 0; j < self.rightItem.length; j++) {
						self.leftItem[j].className='';
						self.rightItem[j].style.display='none';
					};
					self.rightItem[this.index].style.display='block';
					this.className='active';
					self.hasComplete=true;
				}

			})
		}
	}
}


var header = function(parent) {
	this.winH=document.documentElement.clientHeight;
	this.body=document.querySelector('.page');
	this.personal=document.querySelector('.personal');
	this.fix=document.getElementsByClassName('fix')[0];
	this.loginbtn=parent.querySelector('.login');
	this.unlogin=parent.querySelector('.unlogin');
	this.haslogin=parent.querySelector('.haslogin');
	this.headPic=parent.querySelector('.headPic');
	this.leftBtn=document.getElementsByClassName('fixLeftbtn')[0];
	this.hasComplete=true;

	this.bindEle();
}
header.prototype={
	bindEle:function(){
		var self=this;
		this.loginbtn.addEventListener("click",function(){
			if (self.hasComplete) {
				self.hasComplete=false;
				self.haslogin.style.display='block';
				self.unlogin.style.display='none';			
				self.hasComplete=true;
			}
		});
		this.headPic.addEventListener("click",function(){
			if (self.hasComplete) {
				self.hasComplete=false;
				self.body.style.transform='translateX(-2rem)';
				self.fix.style.display='block';
				self.fix.style.left='-2rem';
				self.personal.style.right='0rem';
				self.leftBtn.style.display='none';
				self.hasComplete=true;
			}
		});
		this.fix.addEventListener("click",function(){
			if (self.hasComplete) {
				self.hasComplete=false;
				self.body.style.transform='translateX(0)';
				self.fix.style.left='0rem';
				self.fix.style.display='none';
				self.personal.style.right='-2rem';			
				self.hasComplete=true;						
			}
			event.stopPropagation();
		});
	}
}

new header(document.querySelector('.header'));
new tab(document.querySelector('.content'));
new leftBtn();