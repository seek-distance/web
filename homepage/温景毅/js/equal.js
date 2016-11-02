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
}
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
}

new header(document.querySelector('.header'));