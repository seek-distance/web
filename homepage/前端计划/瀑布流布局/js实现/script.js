// JavaScript Document
window.onload=function(){
	waterfall('main','box');
	var dataInt={"data":[{"src":'0.jpg'},{"src":'1.jpg'},{"src":'2.jpg'},{"src":'3.jpg'},{"src":'4.jpg'}]};
	window.onscroll=function(){
		if(checkScrollSlide()){
			var parent=document.getElementById('main');
			//将数据块渲染到当前页面的尾部
			for(var i=0;i<dataInt.data.length;i++){
				var box=document.createElement('div');
				box.className='box';
				parent.appendChild(box);
				var pic=document.createElement('div');
				pic.className='pic';
				box.appendChild(pic);
				var img=document.createElement('img');
				img.src='../images/'+dataInt.data[i].src;
				pic.appendChild(img);
			}
			waterfall('main','box');
		}
	}
}

function waterfall(parent,box){
	//将main下的所有class为box的元素取出来
	var oParent=document.getElementById(parent);
	var boxs = getByClass(oParent,box);
	//计算页面显示的列数（页面宽/box的宽）
	var boxW=boxs[0].offsetWidth;
	var cols=Math.floor(document.documentElement.clientWidth/boxW);
	//设置main的宽
	oParent.style.width=boxW*cols+'px';
	var hArr=[];
	for(var i=0;i<boxs.length;i++){
		if(i<cols){
			hArr.push(boxs[i].offsetHeight);
		}else{
			var minH=Math.min.apply(null,hArr);
			var index=getMinhIndex(hArr,minH);
			boxs[i].style.position='absolute';
			boxs[i].style.top=minH+'px';
			//boxs[i].style.left=boxW*index+'px';
			boxs[i].style.left=boxs[index].offsetLeft+'px';
			hArr[index]+=boxs[i].offsetHeight;
		}
	}
	
}

//根据class获取元素
function getByClass(parent,cls){
	var result=new Array(),
		elements=parent.getElementsByTagName("*");
		
	for(var i=0;i<elements.length;i++){
		if(elements[i].className==cls){
			result.push(elements[i]);
		}
	}
	return result;
}

function getMinhIndex(arr,val){
	for(var i in arr){
		if(arr[i]==val){
			return i;
		}
	}
}
//检测是否具备加载数据的条件
function checkScrollSlide(){
	var parent=document.getElementById('main');
	var boxs=getByClass(parent,'box');
	var lastBoxH=boxs[boxs.length-1].offsetTop+Math.floor(boxs[boxs.length-1].offsetHeight/2);
	var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;
	var height=document.body.clientHeight||document.documentElement.clientHeight;
	var sum=scrollTop+height;
	return (sum>lastBoxH)?true:false;
	
}
