/*
[기본타입(primitive type), 유사객체]
1.number
2.boolean
3.string
4.undefined
[object 타입: new 생성자 함수를 사용해서 object 타입 객체를 생성, Wrapper 객체를 생성]
Number();
Boolen();
String();
*/


var u;
var i = 10;
var b = true;
var s = 'Hello World';

var fn = function(a, b){ return a+b; };
var o = {};
var a = [];

console.log(u + ":" + typeof(u));
console.log(i + ":" + typeof(i));
console.log(b + ":" + typeof(b));
console.log(s + ":" + typeof(s));
console.log(fn + ":" + typeof(fn));
console.log(o + ":" + typeof(o));
console.log(a + ":" + typeof(a));


console.log("==========================");
var i2 = new Number(10);
var b2 = new Boolean(false);
var s2 = new String('Hello World');

var fn2 = new Function("a", "b", "return a+b;");
var o2 = new Object();
var a2 = new Array();

console.log(i2 + ":" + typeof(i2));
console.log(b2 + ":" + typeof(b2));
console.log(s2 + ":" + typeof(s2));
console.log(fn2 + ":" + typeof(fn));
console.log(o2 + ":" + typeof(o));
console.log(a2 + ":" + typeof(a));

// 원시타입과 원시타입을 Wrapper객체는 별 구분없이 연산 가능하다.
console.log(i + i2);
console.log(s + s2);

// 원시타입도 메소드 호출이 가능하다(?)
// 원시타입에 메소드가 호출 될 때 임시 객체가 만들어 져서 메소드르 호출한 다음에 사라진다.
 //원시타입인데 메소드가 써진다.(객체라고 생각하면 안됨) 잠시 new String()객체로 만든 후 다시 사라진다.  결론 : 기본타입도 객체처럶 쓰면 된다.
console.log(b.valueOf()); 
console.log(b2.valueOf());


