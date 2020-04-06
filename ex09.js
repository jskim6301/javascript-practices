/*
prototype이라는 객체가 존재한다
 */
var MyObject = function(name,age){
	this.name = name;
	this.age = age
} 
MyObject.prototype.school = "bit"
MyObject.prototype.course = "douzone"
MyObject.prototype.info = function(){
	console.log("1."+this.name+":"+this.age+":"+this.school+":"+this.course);
}
//MyObject 객체 생성 1
var o1 = new MyObject("둘리",10); //new로 만들면 proto 타입이 생성된다
console.log("2."+o1.school + ":" + o1.course);

o1.school = "multicampus"
console.log("3."+o1);
//MyObject 객체 생성 2
var o2 = new MyObject("마이콜",20);
console.log("4."+o2);

//테스트
console.log("5."+o1.school + ":" + o2.school);

//오버라이딩
/* o2.info = function(){
	console.log("비밀!");
} */
o2.info();