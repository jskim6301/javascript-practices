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

//배열 메소드 - splice
//index부터count개 삭제 후 삭제 요소를 배열로 반환
console.log(fruits);
var fruits2 = fruits.splice(0,2);//index,count
console.log(fruits2);
console.log(fruits);//결과값 빼내고 나머지 출력

var a1 = [0,1,2,3,4];
console.log(a1);
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