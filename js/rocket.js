var timer=null;
var count=10;
var changeState=function(num){
document.body.className="body-state"+num;
clearInterval(timer);
count=10;
document.getElementById("countdown").innerHTML=count;
if(num==2){
	
	timer=setInterval(function(){
		count=count-1;
		document.getElementById("countdown").innerHTML=count;
		
		if(count<=0){
			
			changeState(3);
		}
	},1000);
}
else if(num==3){
	//document.getElementById("rocket").className="rocket flying";
	var success=setTimeout(function(){
		var rndm=Math.round(Math.random()*10);
		console.log("Random Number: "+rndm);
		if(rndm>5){
			changeState(4);
		}else{
			changeState(5);
		}

	},2000);
}
}