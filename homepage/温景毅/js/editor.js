//插件使用
var editor = new wangEditor('editor');
editor.config.menus=[
	'source',
	'|',
	'bold',
	'italic',
	'link',
	'quote',
	'insertcode',
	'|',
	'img',
    'alignleft',
    'aligncenter',
    'alignright',
	'|',
	'orderlist',
	'unorderlist',
	'fontsize',
	'|',
    'undo',
    'redo',
    'fullscreen'
];
editor.config.codeDefaultLang = 'java'
editor.create();

//我的代码
var myeditor=function(editor) {
	this.editor=editor;

	this.editor.blur();
}

var tab=function(tab){
	this.tab=tab;
	this.li=tab.querySelectorAll('.item-content li');
	this.firstClassify=tab.querySelector('span');
	this.secondClassify=tab.querySelectorAll('span')[1];
	this.content=tab.querySelector('.classify-content');
	this.classifyItem=tab.querySelectorAll('.classify-item');
	this.body=document.body;

	this.bindEle();
	
}
tab.prototype={
	bindEle:function(){
		var self=this;
		this.tab.addEventListener('click',function(event){
			event.stopPropagation(); 
			if (self.content.style.display=='block') {
				self.content.style.display='none';
				this.className='classify-result';	
			}else{
				self.content.style.display='block';
				this.className='classify-result active';
			}			
		})
		for (var i = 0; i < this.li.length; i++) {
			this.li[i].addEventListener('click',function(event){
				event.stopPropagation();
				var first=this.parentNode.parentNode.querySelector('span').innerHTML;
				self.firstClassify.innerHTML=first;
				var second=this.innerHTML;
				self.secondClassify.innerHTML=second;
				self.content.style.display='none';
			})
		}
		for (var i = 0; i < this.classifyItem.length; i++) {
			this.classifyItem[i].addEventListener('click',function(event){
				event.stopPropagation();
			})
		}
		this.body.addEventListener('click',function(){
			self.content.style.display='none';
			self.tab.className='classify-result';
		})
	}
}


var memory=function(parent){
	this.title=parent.querySelector('.title-content');
	this.editorContent=document.getElementById('editor');
	this.alert=parent.querySelector('.memory');
	this.publishBtn=parent.querySelector('.publish-btn a')

	this.oldContent=this.editorContent.innerHTML;
	this.newContent;

	this.init();
	this.startMemory();
	this.bindEle();
}
memory.prototype={
	init:function(){
		if(sessionStorage.getItem('title')){
			this.title.value=sessionStorage.getItem('title');
		}
		if(sessionStorage.getItem('content')){
			this.editorContent.innerHTML=sessionStorage.getItem('content');
		}
	},
	startMemory:function(){
		var self=this;
		setInterval(function(){
			self.newContent=self.editorContent.innerHTML;
			if(self.newContent != self.oldContent){
				var title=self.title.value;
				var content=self.newContent;
				sessionStorage.setItem('title',title);
				sessionStorage.setItem('content',content);
				self.oldContent=self.newContent;
				$(self.alert).fadeIn(3000, function() {
					$(self.alert).fadeOut(1000);
				});
				console.log(sessionStorage.getItem('content'));
			}
		},30000)
	},
	bindEle:function(){
		this.publishBtn.addEventListener('click',function(){
			sessionStorage.removeItem('content');
			sessionStorage.removeItem('title');
		})
	}
}

new myeditor(document.getElementById('editor'));
new tab(document.querySelector('.classify-result'));
new memory(document.querySelector('.page'));