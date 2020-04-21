//배열 확장 : 리스트 메소드 추가하기
/*
var f = function(element){
    console.log(this + ">>>" + element);
    // this.splice(index++,0,element);
}
*/
//콜백함수에서 this는 주의를 해야한다.
Array.prototype.insert = function(index,value){
    if(value instanceof Array){
        // for(var i = 0;i<value.length;i++){
        //     this.splice(index++,0,value[i]);
        // }

        //1.바인드 방법
//        var __this = this; //여기 this는 Array객체
//        value.forEach(function(element){
//            console.log(this + ">>>" + element);//여기 this는 global 객체
//            this.splice(index++,0,element); //global => Array로 bind
//        }.bind(__this));

        //클로저 방식
        var __this = this; //여기 this는 Array객체
        value.forEach(function(element){
            console.log(this + ">>>" + element);//여기 this는 global 객체
            __this.splice(index++,0,element);
        });        
    }else{
        this.splice(index,0,value);
    }
}

Array.prototype.remove = function(index){
    this.splice(index,1);
}
//리스트로 사용하기
var a = [1,2,4];
a.insert(2,3);
console.log(a);

a.remove(3);
console.log(a);

a.insert(2,['a','b','c']); //기대한 값 : [1,2,'a','b','c',3];
console.log(a);//결과 값 : [ 1, 2, [ 'a', 'b', 'c' ], 3 ]