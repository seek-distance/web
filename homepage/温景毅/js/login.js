var login=function(parent){
	this.btn=parent.querySelectorAll('.login-header span');
	this.bottomLine=parent.querySelector('.login-header hr');
	this.loginContent=parent.querySelectorAll('.login-content>div');
	this.mail=parent.querySelector('.register-email');
	this.mailError=parent.querySelector('.email-item .error');
	this.validBtn=parent.querySelector('.validate button');
	this.psd=parent.querySelector('.psd input');
	this.doublePsd=parent.querySelector('.doublePsd input');
	this.douPsdError=parent.querySelector('.doublePsd .error');
	
	this.bindElement();
}
login.prototype ={
	bindElement:function(){
		var self=this;
		for (var i = 0; i < this.btn.length; i++) {
			this.btn[i].index=i;
			this.btn[i].onclick=function(event){
				self.bottomLine.style.left=(this.index*2.9)+'rem';
				for (var i = 0; i < self.btn.length; i++) {
					self.btn[i].style.color='#ccc';
					self.loginContent[i].style.display='none';
				}
				self.loginContent[this.index].style.display='block';
				this.style.color='#5bc0de';
			}
		};
		this.mail.onblur=function(){
			if(!self.validateEmail(self.mail.value)){
				self.mailError.style.display='block';
			}else{
				self.mailError.style.display='none';
				self.validBtn.disabled=false;
			}
		};
		this.validBtn.onclick=function(){
			var This=this;
			var t=60;
			this.disabled=true;
			this.innerHTML='('+ t+ ')秒后重新刷新';
					t--;
			timer=setInterval(function(){
				if(t>0){	
					t--;						
					This.innerHTML='('+ t+ ')秒后重新刷新';
				}else{
					This.innerHTML='重新发送';
					clearInterval(timer);
					This.disabled=false;
				}
			},1000);
			
		};
		this.doublePsd.onblur=function(){
			self.validatePsd();
		}
		this.psd.onblur=function(){
			self.validatePsd();
		}
	},
	validatePsd:function(){
		if(this.psd.value!=this.doublePsd.value && this.doublePsd.value!=''){
			this.douPsdError.style.display='block';
		}else{
			this.douPsdError.style.display='none';
		}
	},
	validateEmail:function(field)
	{
		with (field)
		{
			apos=field.indexOf("@");
			dotpos=field.lastIndexOf(".");
			if (apos<1||dotpos-apos<2){
				return false;
			}else{
				return true;
			}
		}
	}
};

new login(document.querySelector('.login-box'));