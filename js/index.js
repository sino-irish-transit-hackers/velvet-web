var ctx;
var scaleFactor = 1.0;


function draw(){
	ctx.clearRect(0,0,360,240);
	
	ctx.save();
	
	ctx.translate(180, 0);
	ctx.scale(scaleFactor, scaleFactor);
	
	ctx.lineWidth = 10.0/Math.max(1.0, scaleFactor);
	ctx.strokeStyle = "rgba(0,100,255,1)";
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(0,200);
	ctx.stroke();
	ctx.closePath();
	
	ctx.beginPath();
	ctx.moveTo(4,0);
	ctx.lineTo(4,200);
	ctx.stroke();
	ctx.closePath();
	
	ctx.lineWidth = 10.0;
	ctx.strokeStyle = "rgba(0,100,255,"+(3/scaleFactor)+")";
	ctx.beginPath();
	ctx.moveTo(2,0);
	ctx.lineTo(2,200);
	ctx.stroke();
	ctx.closePath();
	
	
	ctx.textAlign = "center";
	ctx.font = (10/scaleFactor) + "px sans-serif";
	
	ctx.fillStyle = "rgba(255,255,255,1.0)";
	ctx.fillText("C", 2, 10);
	
	ctx.fillStyle = "rgba(255,255,255,"+((scaleFactor/5.0)-0.5)+")";
	ctx.fillText("D", 0, 5);
	ctx.fillText("D", 0, 15);
	ctx.fillText("D", 0, 25);
	ctx.fillText("D", 0, 35);
	
	ctx.fillText("U", 4, 5);
	ctx.fillText("U", 4, 15);
	ctx.fillText("U", 4, 25);
	ctx.fillText("U", 4, 35);
	
	ctx.restore();
}



$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	draw();
	
	$(canvas).bind("mousewheel",function(ev){
		if( ev.originalEvent.wheelDelta > 0 ){
			if( scaleFactor < 5.0 ){
				scaleFactor += .05;
			}
		} else if( ev.originalEvent.wheelDelta < 1 ){
			if( scaleFactor > 0.5){
				scaleFactor -= .05;
			}
		}
		draw();
	});
});
