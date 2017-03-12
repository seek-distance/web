var student=require("./student");
var teacher=require("./teacher");

function add(item){
	teacher.add(item.teacher);
	student.add(item.student);
}

exports.add=add;
