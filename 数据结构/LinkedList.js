function Node(ele) {
    this.ele = ele;
    this.next = null;
}

function LList() {
    this.head = new Node("head");
}
LList.prototype = {
    find: function(item) {
        var currNode = this.head;
        while (currNode.ele != item) {
            currNode = currNode.next;
        }
        return currNode;
    },
    insert: function(newEle, item) {
        var newNode = new Node(newEle);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },
    remove: function(item) {
    	var preNode = this.findPrevious(item);
    	if (!(preNode.next == null)) {
    		preNode.next = preNode.next.next;
    	}
    },
    findPrevious:function(item){
    	var currNode=this.head;
    	while(!(currNode.next ==null) && currNode.next.ele != item){
    		currNode = currNode.next;
    	}
    	return currNode;
    },
    display: function() {
        var currNode = this.head;
        while(!(currNode.next==null)){
        	console.log(currNode.next.ele);
        	currNode=currNode.next;
        }
    }
}

var cities = new LList();
cities.insert("123","head");
cities.insert("234","123");
cities.insert("345","234");
cities.display();
cities.remove("234");
cities.display();

