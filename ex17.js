//URL 다루기
var url = 'http://localhost:8080/mysite03?name=홍길동';

//1.escape (x) : URL을 전부 encoding, deprecated
var url2 = escape(url);
console.log(url2);

//2.encodeURI (o) : parameter만 encoding

var url3 = encodeURI(url);
console.log(url3);
//location.href = encodeURI(url);

//3. encodingURLComponent
var url4 = encodeURIComponent(url);
console.log(url4);

//3. encodingURIComponent 사용 예
var url = "http://localhost:8080/mysite03";
var o = {
    no:10,
    name:'홍길동',
    email:'hong@gmail.com'
}

var toQueryString = function(o){
    var qs = [];
    for(property in o){
        qs.push(property + "=" + encodeURIComponent(o[property]));
    }
    return qs.join('&');
}

var url5 = url + "?" + toQueryString(o);
console.log(url5);