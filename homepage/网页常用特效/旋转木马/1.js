// JavaScript Document
$(function(){
	var Play=function(box){
		var self=this;
		var timer;
		this.box=box;
		this.pic=this.box.find(".pic");
		this.leftBtn=this.box.find(".left_btn");
		this.rightBtn=this.box.find(".right_btn");
		this.pic_items=this.box.find(".pic_item");
		if(this.pic_items.size()%2==0){
			this.pic_items.append(this.pic_items.eq(0).clone());
			this.pic_items=this.pic.children();
		}
		this.length=this.pic_items.length;
		this.firstPic=this.pic_items.first();
		this.lastPic=this.pic_items.last();
		this.flag=true;
		
		//默认参数
		this.setting={"width":1000,"height":270,"picWidth":640,"scale":0.9,"autoPlay":true,"delay":2000,"speed":300,"verticalAlign":"middle"};
		$.extend(this.setting,this.getSetting());
		this.firstSet();	//设置盒子，第一张图片和左右键位置
		this.secondSet();	//设置剩下图片位置
		
		this.leftBtn.click(function(){
			if(self.flag==true){
				self.flag=false;
				self.picMove("right");	
			}
		});
		this.rightBtn.click(function(){
			if(self.flag==true){
				self.flag=false;
				self.picMove("left");
			}
		});
		if(this.setting.autoPlay){
			timer=setInterval(function(){
				self.rightBtn.click()
			},this.setting.delay);
		}
		this.box.mouseover(function(){
			clearInterval(timer);
		});
		this.box.mouseout(function(){
			timer=setInterval(function(){
				self.rightBtn.click()
			},self.setting.delay);
		});
	}
	Play.prototype={
		picMove:function(dir){
			var self=this;
			var arr=[];
			if(dir=="right"){
				this.pic_items.each(function(i){
					var nextPic=$(this).next().get(0)?$(this).next():self.firstPic;
					arr.push(nextPic.css("zIndex"));
					$(this).animate({
						width:nextPic.width(),
						height:nextPic.height(),
						left:nextPic.css("left"),
						opacity:nextPic.css("opacity"),
						top:nextPic.css("top")
					},self.setting.speed,function(){
						self.flag=true;
					});
					$(this).css({zIndex:arr[i]});
				});
				this.pic_items.each(function(i){
					$(this).css({zIndex:arr[i]});
				});
			}else{
				this.pic_items.each(function(i){
					var prevPic=$(this).prev().get(0)?$(this).prev():self.lastPic;
					arr.push(prevPic.css("zIndex"));
					$(this).animate({
						width:prevPic.width(),
						height:prevPic.height(),
						left:prevPic.css("left"),
						opacity:prevPic.css("opacity"),
						zIndex:prevPic.css("zIndex"),
						top:prevPic.css("top")
					},self.setting.speed,function(){
						self.flag=true;
					});
				});
				
				this.pic_items.each(function(i){
					$(this).css({zIndex:arr[i]});
				});
			}
		},
		setTop:function(height){
			var align=this.setting.verticalAlign;
			var top;
			if(align=="middle"){
				top=(this.setting.height-height)/2;
			}else if(align=="top"){
				top=0;
			}else{
				top=this.setting.height-height;
			}
			return top;
		},
		secondSet:function(){
			var self=this;
			var btnW=(this.setting.width-this.setting.picWidth)/2;
			this.rightPic=this.pic_items.slice(1,Math.ceil(this.length/2));
			this.leftPic=this.pic_items.slice(Math.ceil(this.length/2));
			var rw=this.setting.picWidth,
			    rh=this.setting.height,
				gap=btnW/this.rightPic.length,
				rzIndex=Math.floor(this.length/2)-1;
			this.rightPic.each(function(i){
				rw=rw*self.setting.scale;
				rh=rh*self.setting.scale;
				$(this).css({
					width:rw,
					height:rh,
					left:(++i)*gap+btnW+self.setting.picWidth-rw,
					opacity:1/i,
					zIndex:rzIndex,
					top:self.setTop(rh)
				});
				rzIndex--;
			});
			var lw=self.rightPic.last().width(),
				lh=self.rightPic.last().height(),
				lopacity=Math.floor(this.length/2);
			this.leftPic.each(function(i){
				$(this).css({
					width:lw,
					height:lh,
					left:i*gap,
					opacity:1/lopacity,
					zIndex:i,
					top:self.setTop(lh)
				});
				lw=lw/self.setting.scale;
				lh=lh/self.setting.scale;
				lopacity--;
			});
		},
		firstSet:function(){
			this.box.css({
				width:this.setting.width,
				height:this.setting.height
			});
			this.firstPic.css({
				height:this.setting.height,
				width:this.setting.picWidth,
				left:(this.setting.width-this.setting.picWidth)/2,
				zIndex:Math.floor(this.length/2),
				top:this.setTop(this.setting.height)
			});
			this.leftBtn.css({
				zIndex:Math.ceil(this.length/2),
				height:this.setting.height,
				width:(this.setting.width-this.setting.picWidth)/2
			});
			this.rightBtn.css({
				zIndex:Math.ceil(this.length/2),
				height:this.setting.height,
				width:(this.setting.width-this.setting.picWidth)/2
			})
		},
		getSetting:function(){
			var setting=this.box.attr("data-setting");
			if(setting&&setting!=""){
				return $.parseJSON(setting);
			}else{
				return {};
			}
		},
	}
	Play.init=function(){
		$(".box").each(function(index) {
			new Play($(this));
		});
	}
	Play.init();
})

