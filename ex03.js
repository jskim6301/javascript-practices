var myVar1;
var myVar2 = null;

console.log(myVar1 + ":" + myVar2);//undefined : null
console.log(typeof(myVar1) + ":" + typeof(myVar2));//undefined:object
console.log("==========================");

console.log(myVar1 == myVar2);//true (값 비교)
console.log(myVar1 === myVar2); //false (타입비교)
console.log("==========================");

// == : equality, 값의 등치성, 형변환 o
console.log(1 == "1");//true(number)
console.log(true == 1);//true(number)
console.log('abc' == new String('abc'));//true(number)
console.log(true+10); //11(number)

console.log('abc' + new String('abc'));//abcabc(string)
console.log(1+"1");//11(string)
console.log("1"+1);//11(string)

console.log("==========================");
// === : identity, 객체의 동일성, 형변환 x
console.log("2" === 2); //false(number) => 0
console.log(true === 1);//false
console.log('abc' === new String('abc'));//false

console.log("==========================");
//추천
//엄격하게 형변환을 해서 두 피연산의 타입을 맞춰준다.
var str = 5;
console.log(parseInt(str) == 5);