function mySet(){
	this.data=[];
}
mySet.prototype={
	add:function(d){
		if (this.data.indexOf(d) == -1) {
			this.data.push(d);
			return true;
		}else{
			return false;
		}
	},
	remove:function(d){
		var index=this.data.indexOf(d);
		if (index != -1) {
			this.data.splice(index,1);
			return true;
		}else{
			return false;
		}
	},
	show:function(){
		return this.data;
	},
	contains:function(d){
		if (this.data.indexOf(d) != -1) {
			return true;
		}else{
			return false;
		}
	},
	union:function(set){
		var tempSet=new mySet();
		for (var i = 0; i < this.data.length; i++) {
			tempSet.add(this.data[i]);
		}
		for (var i = 0; i < set.data.length; i++) {
			tempSet.add(set.data[i]);
		}
		return tempSet;
	},
	intersect:function(set){
		var tempSet=new mySet();
		for (var i = 0; i < this.data.length; i++) {
			if(set.contains(this.data[i])){
				tempSet.add(this.data[i]);
			}
		}
		return tempSet;
	}
}
var names=new mySet();
names.add('1');
names.add('2');
names.add('3');
names.add('4');
/*if (names.add('1')) {
	console.log("添加成功");
}else{
	console.log("添加失败");
}
console.log(names.show());
if (names.remove('2')) {
	console.log("删除成功");
}else{
	console.log("删除失败");
}
console.log(names.show());
*/
var dmp=new mySet();
dmp.add('1');
dmp.add('5');
dmp.add('6');

console.log(names.union(dmp));
