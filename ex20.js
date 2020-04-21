global.name ="NodeJS";
var f = function(s){
    console.log(s+" " + this.name);
}
f("hello");

var o = {
    name:"hongildong"
}

f.call(o,"hello");
