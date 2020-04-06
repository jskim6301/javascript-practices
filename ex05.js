/*
구문(statement) : 자바스크립트 엔진이 읽어서 실행하는 단위
구문을 구분할 때는 개행(\n) 또는 세미콜론(;)으로 구분한다
*/
var o1 = new Object();
o1.name = '둘리';
o1.age = 10;

o1.another = new Object();
o1.another.name = '마이콜';
o1.another.age = 30;
console.log(o1);
console.log("=================================");

var o2 = {};
o2.name = '둘리';
o2.age = 10;
console.log(o2);
console.log("=================================");

//JSON(Java Script Object Notation) : 자바스크립트 객체 표기법
var o3 = {
	name : '둘리',
	age: 10,
	another:{
		name:'마이콜',
		age:30
	}
};
console.log(o3);
console.log("=================================");

var str = "4" + "4";
console.log(str);//44(string)
console.log(eval(str));//44(number) 코드로 인식

/* XmlHttpRequest 호스트 객체를 사용해서 통신한다.*/
/* var response = '({ "no":1,"name":"홍길동","email":"hong@gmail.com"})';
var userVO = eval(response); */

var response = '{ "no" : 1, "name" : "홍길동", "email" : "hongildong@gmail.com" }';
var userVO = eval("("+response+")"); //eval()은 문자열을 코드로 인식하게 하는 함수.

console.log(userVO);
console.log(userVO.no + ":" + userVO.name);