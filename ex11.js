
// 에러 : not a function
var s1 = "hello1"; //에러
/* s1.myFunction(); */

//prototype오르 확장
String.prototype.myFunction = function(){
	console.log('mystring:' + this);
}

var s2 = "hello2"; //동작 ok
s2.myFunction();

