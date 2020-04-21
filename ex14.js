//배열 메소드 - concat

var colors = ['black','white','yellow'];
var fruits = ['mango','banana','apple'];
var test = fruits.concat(colors);
console.log(test);

//배열 메소드 - join
var str = fruits.join(',');
console.log(str);

//배열 메소드 - pop, push : stack 지원
var color = colors.pop();
console.log(color);
console.log(colors);

colors.push('red');
console.log(colors);

//배열 메소드 - reverse
console.log(fruits);
fruits.reverse();
console.log(fruits);

//배열 메소드 - shift
var numbers = [4000,8000,3000,5000,1000];
console.log(numbers);
numbers.shift();
console.log(numbers);

//배열 메소드 - slice
var numbers2 = numbers.slice(0,3);
console.log(numbers2);

//배열 메소드 - sort
console.log(numbers);
numbers.sort();
console.log(numbers);
console.log("======================================================");
var fruits = ['mango','banana','apple'];
//배열 메소드 - splice
//index부터count개 삭제 후 삭제 요소를 배열로 반환

var fruits2 = fruits.splice(0,2);//index,count
console.log(fruits2);
console.log(fruits);//결과값 빼내고 나머지 출력

var a1 = [0,1,2,3,4];
console.log("1  "+a1.splice(1,2));
console.log("2  "+a1);
a1.splice(1,3,10);
console.log(a1);//0,10,4

var a2 = [0,100,2,3,4];
console.log(a2);
var a3 = a2.splice(1,1,10);
console.log(a3);//100

var a4 = [0,1,2,3,4];
console.log(a4);
var a5 = a4.splice(1,0,10);
console.log(a5);//없음

console.log("==========")
var b1 = [0,1,2,3,4];
console.log(b1.splice(1,2));
console.log(b1);
var b2 = b1.splice(1,2);
console.log(b2);

console.log("==========");
var c1 = [0,1,2,3,4,5,6,7,8,9];
console.log(c1.splice(2,4,10000));
console.log(c1);

console.log("==========");
var d1 = [0,1,2,3,4,5,6,7,8,9];
console.log(d1.splice(3,2,1000));
console.log(d1);
console.log(d1.splice(3,3,1000));

console.log("==========");
var e1 = [0,1,2,3,4,5,6,7,8,9];
console.log(e1.splice(3,0,1000));
console.log(e1);