window.addEventListener('load',function(){
	var rects = 
		[new Rect(100,100,200,300,"#00f"),
		 new Rect(250,250,400,400,"#0f0"),
		 new Rect(300,350,500,800,"#f00")];
	
	var index = 0;
	var intervalId = setInterval(function(){
		if(index >= rects.length){
			clearInterval(intervalId);
			return;
		}
		rects[index].show();
		console.log(rects[index].hasOwnProperty("x"));
		
		index++;
	},1000);
});