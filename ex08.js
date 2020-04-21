var o = {
	name:"둘리",
	age:10,
	isFemale:false
};

var f= function(){
	console.log("Hello world");
};


console.log("========================");

o.another = {
		name:"마이콜",
		age:30
};
f.another = {
		name:"또치",
		age:10,
		info:function(){
			console.log(this.name+":"+this.age);
		}
}
console.log(o);
console.log(f);
console.log(f.another);
console.log(f.another.info);

console.log("==============기본타입은 확장불가=================");
var i = 10;
i.another = {};
console.log(i.another);//undefined