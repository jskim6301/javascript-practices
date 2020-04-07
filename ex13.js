/* 배열 (Array)
*/
console.log("--------------------Array vs Object ------------------");
//1. 생성자 함수
var a1 = new Array() 
console.log(typeof(a1));
//배열을 정의할 때 크기 지정은 별 의미가 없다
//동적으로 배열은 늘어 난다.
var a2 = new Array(10); 
console.log(a2.length);

a2[0] = 0;
a2[10] = 10;
a2[11] = 11;
a2[12] = 12;
console.log(a2[1],a2[2]); //배열 요소의 값을 대입하지 않으면 undefined
console.log(a2.length);

a = [];
a[0] = 0000;
a["1"] = 1111;
console.log(a);//[ 0, 1111 ]
console.log(a["0"],a[0]);//0 0
console.log(a["1"],a[1]);//1111 1111
a["name"] = 'abc';
console.log(a["name"]);//abc
console.log(a.length);//2

for(property in a){
    console.log("prop " +property+ ":" + typeof(property));//string으로 캐스팅이 된다
}

console.log("--------------------------------------");
o = {};
o["0"] = 0000;
o["1"] = 1111;
console.log(o);//{ '0': 0, '1': 1111 }
console.log(o["0"],o[0]);//0 0
o["name"] = 'abc';
console.log(o["name"]);//abc
console.log(o.length);//undefined

for(property in o){
    console.log("prop " +property+ ":" + typeof(property));//string으로 캐스팅이 된다
}
console.log("------------------리터럴--------------------");
//2. 리터럴
var a3 = [];
console.log(typeof(a3));

//배열 초기화
var a4 = [function(){console.log("hello")},20,"javascript",30,true,{email:'hong@gmail.com',name:'홍길동'},true,null,undefined];
console.log(a4.length);
for(var i = 0;i<a4.length;i++){
    console.log(a4[i]);
}

a4[0]();