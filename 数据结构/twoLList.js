//未完待续

function Node(ele){
	this.ele=ele;
	this.next=null;
	this.previous=null;
}

function twoLlist{
	this.head=new Node("head");
}
twoLlist.prototype={
	find:function(item){
		var currNode=this.head;
		while(currNode.ele != item){
 			currNode=currNode.next;
		}
		return currNode;
	},
	insert:function(newEle, item){
		var currNode=this.find(item);
		var newEle=new Node(newEle);
		currNode.next.previous=currNode;
		newEle.next=currNode.next;
 		newEle.previous=currNode;
 		currNode.next=newEle;
	},
	display:function(){
		var currNode=this.head;
		while(currNode.next!=null){
			console.log(currNode.next.ele);
			currNode=currNode.next;
		}
	},
	remove:function(item){
		var currNode=this.find(item);
		if(currNode.next!=null){

		}
	}

}

