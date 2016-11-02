var comment=function(parent){
	this.fix=document.getElementsByClassName('fix')[0];
	this.commentContent=parent.querySelectorAll('.comment-items .comment-content');
	this.commentAlert=document.getElementsByClassName('comment-alert')[0];
	this.closebtn=document.getElementsByClassName('alert-close')[0];
	this.publish=document.getElementsByClassName('publish')[0];
	this.text=this.commentAlert.querySelector('textarea');
	this.hasComplete=true;

	
	this.bindEle();
}
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
		};
		this.fix.addEventListener('click',function(){
			if(self.hasComplete){
				self.alertClose(self);
			}
		});
		this.closebtn.addEventListener('click',function(){
			if(self.hasComplete){
				self.fix.click();
			}
		})
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
}

new comment(document.querySelector('.comment-items'));