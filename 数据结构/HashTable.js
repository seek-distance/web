function HashTable(){
	this.table=new Array(137);
}
HashTable.prototype={
	simpleHash:function(data){
		var total=0;
		for (var i = 0; i < data.length; i++) {
			total += data.charCodeAt(i);
		}
		return total % this.table.length;
	},
	put:function(data){
		var pos=this.simpleHash(data);
		this.table[pos]=data;
	},
	newPut:function(data){
		var pos=this.betterHash(data);
		this.table[pos]=data;
	},
	showDistro:function(){
		var n=0;
		for (var i = 0; i < this.table.length; i++) {
			if(this.table[i] != undefined){
				console.log(i + ": " + this.table[i]);
			}
		}
	},
	betterHash:function(string){
		const H=37;
		var total=0;
		for (var i = 0; i < string.length; i++) {
			total += H*total + string.charCodeAt(i);
		}
		total=total % this.table.length;
		if (total < 0) {
			total += this.table.length - 1;
		}
		return parseInt(total);
	},
	lastPut:function(key,data){
		var pos=this.betterHash(key);
		this.table[pos] = data;
	},
	get:function(key){
		return this.table[this.betterHash(key)];
	}
}

/*var someNames=['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable=new HashTable();
for (var i = 0; i < someNames.length; i++) {
	hTable.put(someNames[i]);
}
hTable.showDistro();*/

var someNames=['David', 'Jennifer', 'Donnie', 'Raymond', 'Cynthia', 'Mike', 'Clayton', 'Danny', 'Jonathan'];
var hTable=new HashTable();
for (var i = 0; i < someNames.length; i++) {
	hTable.newPut(someNames[i]);
}
hTable.showDistro();

