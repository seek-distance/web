// JavaScript Document
$(function(){
	var Move=function(box){
		var self=this;
		this.box=box;
		this.pic=this.box.find(".pic");
		this.pic_item=this.box.find(".pic_item");
		this.pic_item.find('img').css({'width': $(window).width(),'height':'600px'});
		this.btns=this.box.find(".mybtn");
		this.leftBtn=this.box.find(".left_btn");
		this.rightBtn=this.box.find(".right_btn");
		this.liH=this.pic_item.first().height();
		this.liW=this.pic_item.first().width();
		this.pic_num=this.box.find(".pic_num");
		this.num_item=this.box.find(".num_item");
		this.flag=true;
		this.length=this.pic_item.length;
		
		//默认参数
		this.setting={
			"speed":500,
			"gapTime":2000
		}
		$.extend(this.setting,this.getSetting());
		this.setBox();	//设置盒子的宽高，滚动参数
		
		//左右按钮设置
		this.leftBtn.click(function(){
			if(self.flag){
				self.flag=false;
				var index=self.pic_num.find(".on").index()-1;
				if(index==-1)
					index=self.length-1;
				self.picMove(index);
			}
		});
		this.rightBtn.click(function(){
			if(self.flag){
				self.flag=false;
				var index=self.pic_num.find(".on").index()+1;
				self.picMove(index);
			}
		});
		
		
		this.autoPlay();	//自动滚动
		
		this.box.mouseover(function(){
			clearInterval(self.timer);
		});
		this.box.mouseout(function(){
			self.autoPlay();
		});
		
		this.num_item.each(function(i){
			$(this).click(function(){
				self.picMove($(this).index());
			});
		})
	}
	Move.prototype={
		getSetting:function(){
			var setting=this.box.attr("data-setting");
			if(setting&&setting!=""){
				return $.parseJSON(setting);
			}else{
				return {};
			}
		},
		autoPlay:function(){
			var self=this;
			this.timer=setInterval(function(){
				self.rightBtn.click()
			},self.setting.gapTime);
		},
		picMove:function(i){
			var self=this;
			self.num_item.each(function(){
				$(this).removeClass('on');
			});
			if(i==self.length){
				self.num_item.eq(0).addClass('on');
				this.pic.animate({
						marginLeft:-i*this.liW
					},self.setting.speed,
					function(){
						self.pic.css("marginLeft","0");
						self.flag=true;
					});
			}else{
				self.num_item.eq(i).addClass('on');
				this.pic.animate({
						marginLeft:-i*this.liW
					},self.setting.speed,function(){
						self.flag=true;
					})
			}
			
		},
		setBox:function(){
			this.box.css({
				height:this.liH,
				width:this.liW,
			});
			this.pic.css({
				height:this.liH,
				width:this.liW*this.pic_item.length,
			});
			this.btns.css({
				height:this.liH
			});
			//滚动参数设置
			this.pic.html(this.pic.html()+this.pic.html());
			this.li=this.pic.find(".pic_item");
			this.pic.css({width:this.li.length*this.liW});
		}
	}
	Move.init=function(){
		console.log($('.box').get(0))
		$(".box").each(function(index) {
			new Move($(this));
		});
	}
	Move.init();
})

