// 1.자바스크립트는 자바와 같은 block scope 없다.
// 2.function{}안에서 var를 사용하개 되면 function scope가 된다.
// 3.let(es6), const(es6)는 block scope를 만든다.
var i = 10;
var f = function(){
	var i = 20;
	j = 100;
	console.log(i);
	i = i-1;
}
f();//20
console.log(i);//19 
//  =>블록내에서 var i = 20 설정을 하면 i값은 10이 된다
//  =>local범위가 발생함(지역변수가 됨)

console.log(j);//100  => 블록 밖에서도 출력이 된다.


{
	let x = 10000;
	const PI = 3.14;
	x = 100;
	//상수이기 때문에 오류
	//PI = 0;
}
