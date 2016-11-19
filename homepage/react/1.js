/*var get=function(url,success){
	var xhr=new XMLHttpRequest();
	xhr.open('get',url,true);
	xhr.send();
	xhr.onreadystatechange = function(){
		if( xhr.readyState == 4 && xhr.status == 200){
			success && success(xhr.responseText);
		}
	}
}*/
var New= React.createClass({
	getInitialState: function(){
		return {
			showMore:false,		//显示右上角
			showComment:'none',	//显示评论
			reload:'true'	//页面刷新
		}
	},
	//显示右上角
	showMore:function(event){
		if (!this.state.showMore) {
			event.stopPropagation();
			this.setState({showMore:true});
		}
		
	},
	//隐藏右上角
	hideMore:function(){
		if (this.state.showMore) {
			this.setState({showMore:false});
		}		
	},
	//显示评论
	showComment:function(){
		if(this.state.showComment=='none')
			this.setState({showComment:'block'});
		else
			this.setState({showComment:'none'});
	},
	//点赞
	clickPraise:function(){
		var praise=this.refs.praise.getDOMNode();
		if(praise.className=="fa fa-thumbs-o-up"){
			newContent.praise=newContent.praise-1;
			praise.className='fa fa-thumbs-up';
		}else{
			newContent.praise=newContent.praise+1;
			praise.className='fa fa-thumbs-o-up';
		}
		this.setState({showReply:!this.state.reload});
	},
	render:function() {
		var showmore;
		var self=this;
		var mystyle={
			background: 'url('+this.props.new.headPic+') no-repeat center center'
		};
		if(this.state.showMore){
			showmore='more-content show';		
		}else{
			showmore='more-content';
		}
		return <div onClick={this.hideMore}>
				<div className="item-head clearfix">
					<div className="head-left l">
						<a href="#" style={mystyle}></a>
					</div>
					<div className="head-right l">
						<div className="clearfix right-name">
							<a href="#">{this.props.new.name}</a>
							<div onClick={this.showMore} className="new-more r">
								<i className="fa fa-angle-down"></i>
								<div className={showmore} ref='more'>
									<ul>
										<li>
											<a href="#">帮上头条</a>
										</li>
										<li>
											<a href="#">屏蔽</a>
										</li>
										<li>
											<a href="#">举报</a>
										</li>
									</ul>
								</div>
							</div>					
						</div>
						<p className="new-time">{this.props.new.time}</p>
						<p className="new-content">{this.props.new.content}</p>
					</div>
				</div>
				<div className="item-foot clearfix">
					<ul className="foot-content">
						<li>
							<a href="#">
								<i className="fa fa-star-o"></i>
								<span>收藏</span>		
							</a>
						</li>
						<li>
							<a href="#">
								<i className="fa fa-reply"></i>
								<span>{this.props.new.reply}</span>		
							</a>
						</li>
						<li>
							<a href="#" onClick={this.showComment}>
								<i className="fa fa-commenting-o"></i>
								<span>{this.props.new.comment}</span>		
							</a>
						</li>
						<li>
							<a href="#" onClick={this.clickPraise}>
								<i className="fa fa-thumbs-o-up" ref='praise'></i>
								<span>{this.props.new.praise}</span>		
							</a>
						</li>				
					</ul>
				</div>
				<Comment lis={this.props.lis} user={this.props.user} showComment={this.state.showComment}></Comment>
			   </div>
	}
});
//评论部分
var Comment=React.createClass({
	getInitialState:function(){
		return {
			reload:false,		//强制刷新dom节点
			btnClass:"comment-btn disabled",
			btnDisabled:true,
		}
	},
	showReply:function(index){	//显示回复输入框
		var curDOM=React.findDOMNode(this.refs['reply'+index]);
		curDOM.style.display='block';
		this.setState({showReply:!this.state.reload});
	},
	clickPraise:function(index){	//点赞页面
		if (lis[index].hasPraise) {
			this.props.lis[index].hasPraise=false;
			this.props.lis[index].replyPraise=this.props.lis[index].replyPraise-1;
		}else{
			this.props.lis[index].hasPraise=true;
			this.props.lis[index].replyPraise=this.props.lis[index].replyPraise+1;
		}
		this.setState({showReply:!this.state.reload});		
	},
	inputChange:function(){
		var btn=React.findDOMNode(this.refs.commentbtn);
		var input=React.findDOMNode(this.refs.commentInput);
		if(input.value!=''){
			this.setState({btnDisabled:false});
			this.setState({btnClass:"comment-btn"});
		}else{
			this.setState({btnDisabled:true});
			this.setState({btnClass:"comment-btn disabled"});
		}		
	},
	replyInputChange:function(index){
		var btn=React.findDOMNode(this.refs['replybtn'+index]);
		var input=React.findDOMNode(this.refs['replyInput'+index]);
		if (input.value!='') {
			btn.disabled=false;
			btn.className='';
		}else{
			btn.disabled=true;
			btn.className='disabled';
		}
	},
	addReply:function() {
		var input=React.findDOMNode(this.refs.commentInput);
		var li={
			"replyPic": this.props.user.userPic,
	        "replyArry": [<a href='#'>{this.props.user.userName}</a>], 
	        "replyContent": input.value, 
	        "replyTime": "1秒前", 
	        "replyPraise": 0, 
	        "hasPraise":false,
		};
		this.props.lis.unshift(li);
		input.value='';
		this.setState({showReply:!this.state.reload});	
	},
	replyOther:function(index,replyName){
		var reply=React.findDOMNode(this.refs['reply'+index]);
		var input=React.findDOMNode(this.refs['replyInput'+index]);
		if(input.value!=''){
			var li={
				"replyPic": this.props.user.userPic,
		        "replyArry": [<a href='#'>{this.props.user.userName}</a>,<span>：回复</span>,<a href='#'>{replyName}</a>], 
		        "replyContent": input.value, 
		        "replyTime": "1秒前", 
		        "replyPraise": 0, 
		        "hasPraise":false,
			};
			this.props.lis.unshift(li);
			input.value='';
			reply.style.display='none';
			this.setState({showReply:!this.state.reload});
		}
		
	},
	render:function(){
		var self=this;
		return  <div className="comment" style={{display:this.props.showComment}}>
					<div className='triangle'></div>
					<div className="comment-head clearfix">
						<div className="head-left l">
							<img src={this.props.user.userPic} />
						</div>
						<div className="head-right l">
							<input className="comment-text" type="text" onChange={this.inputChange} ref='commentInput'/>
							<button onClick={this.addReply} className={this.state.btnClass} disabled={this.state.btnDisabled} ref='commentbtn'>评论</button>
						</div>
					</div>
					<div className="comment-content">
						<ul>
							{
								this.props.lis.map(function(li,index) {
									var replyName=li.replyArry[0]._store.originalProps.children;
									var praiseClass = li.hasPraise ? "fa fa-thumbs-up":'fa fa-thumbs-o-up';
									return <li className="reply-item clearfix">
											<a href="#" className="reply-pic l">
												<img src={li.replyPic}/>
											</a>
											<div className="reply-right l">
												<div className="reply-head">
													<span className="reply-arry">{li.replyArry}</span>：
													{li.replyContent}			
												</div>
												<div className="reply-foot">
													<span className="reply-time">{li.replyTime}</span>
													<ul className='clearfix r'>
														<li><a href="javascript:void(0)" onClick={self.showReply.bind(this,index)}>回复</a></li>
														<li>
															<a href="#" onClick={self.clickPraise.bind(this,index)}>
																<i ref={'praise'+index} className={praiseClass}></i>
																<span>{li.replyPraise}</span>
															</a>
														</li>
													</ul>
												</div>
												<div className="hide-reply" ref={'reply'+index} style={{display:'none'}}>
													<input placeholder={'回复：'+replyName} type="text" ref={'replyInput'+index} onChange={self.replyInputChange.bind(this,index)}/>
													<button ref={'replybtn'+index} className="disabled" onClick={self.replyOther.bind(this,index,replyName)}>评论</button>
												</div>
											</div>
										   </li>
								})
							}
						</ul>
					</div>
				</div>
	}
});

var lis=[
    {
        "replyPic": "small-icon.jpg",
        "replyArry": [<a href='#'>羊刀是自己</a>], 
        "replyContent": "我刚才在火车站自助取票，听后面一个戴金项链的大叔说：“读书有啥用，大学生还不是得给我打工。”我听完微微一笑，取完票后把取票机的语言改成English。", 
        "replyTime": "10秒前", 
        "replyPraise": 2, 
        "hasPraise":true,	//已经点赞
    }, 
    {
        "replyPic": "small-icon.jpg",
        "replyArry": [<a href='#'>羊刀己</a>,<span>：回复</span>,<a href='#'>刀是</a>], 
        "replyContent": "我刚才在火车站自助取票，听后面一个戴金项链的大叔说：“读书有啥用，大学生还不是得给我打工。”我听完微微一笑，取完票后把取票机的语言改成English。", 
        "replyTime": "20秒前", 
        "replyPraise": 3, 
        "hasPraise":false,
    }
];
var newContent={
	headPic:'small-icon.jpg',
	name:'高考直通车',
	time:'今天 06:45',
	reply:9,
	comment:2,
	praise:29,
	content:'【高考语文易用错成语】140. 相濡以沫：泉水干涸，鱼靠在一起以唾沫相湿润（语见《庄子》）。后比喻同处困境，相互救助。141. 相敬如宾：形容夫妻互相尊敬像对待宾客一样。142. 宵衣旰（gàn）食：天不亮就穿衣起来，天黑了才吃饭。形容勤于政务。'

}
var user={
	userName:'心向远方',
	userPic:'login-pic.jpg'
}
React.render(<New user={user} new={newContent} lis={lis}/>,document.querySelector('.new-item'));
