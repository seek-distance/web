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


var comment=function(parent){
	this.fix=document.getElementsByClassName('fix')[0];
	this.commentContent=parent.querySelectorAll('.comment-items .comment-content');
	this.commentAlert=document.getElementsByClassName('comment-alert')[0];
	this.closebtn=document.getElementsByClassName('alert-close')[0];
	this.publish=document.getElementsByClassName('publish')[0];
	this.text=this.commentAlert.querySelector('textarea');
	this.hasComplete=true;

	
	this.bindEle();
};
comment.prototype={
	bindEle:function(){
		var self=this;
		for (var i = 0; i < this.commentContent.length; i++) {
			this.commentContent[i].addEventListener('click',function(){
				if(self.hasComplete){
					var place=this.querySelector('.first-name').innerHTML;
					self.text.placeholder="回复"+place+"：";
					self.alertOpen(self);
				}
			});
		}
		this.fix.addEventListener('click',function(){
			if(self.hasComplete){
				self.alertClose(self);
			}
		});
		this.closebtn.addEventListener('click',function(){
			if(self.hasComplete){
				self.fix.click();
			}
		});
	},
	alertOpen:function(self){
		self.hasComplete=false;
		self.fix.style.display='block';
		self.commentAlert.style.top='50%';
		self.hasComplete=true;
	},
	alertClose:function(self){
		self.hasComplete=false;
		self.commentAlert.style.top='-50%';
		self.hasComplete=true; 
	}
};

new comment(document.querySelector('.comment-items'));
var header = function(parent) {
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
};
header.prototype={
	bindEle:function(){
		var self=this;
		if (this.loginbtn) {
			this.loginbtn.addEventListener("click",function(){
				if (self.hasComplete) {
					self.hasComplete=false;
					self.haslogin.style.display='block';
					self.unlogin.style.display='none';			
					self.hasComplete=true;
				}
			});
		}
		this.headPic.addEventListener("click",function(){
			if (self.hasComplete) {
				self.hasComplete=false;
				self.body.style.transform='translateX(-2rem)';
				self.fix.style.display='block';
				self.fix.style.left='-2rem';
				self.personal.style.right='0rem';
				if(self.leftBtn)
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
};

new header(document.querySelector('.header'));