var ctx;
var scaleFactor = 1.0;


function draw(){
	ctx.clearRect(0,0,360,240);
	ctx.lineWidth = 12.0/Math.max(1.0, scaleFactor);
	ctx.strokeStyle = "rgba(0,100,255,0.5)";
	ctx.fillStyle = "white";
	ctx.font = (10/scaleFactor) + "px sans-serif";
	
	
	ctx.save();
	
	ctx.translate(180, 0);
	ctx.scale(scaleFactor, scaleFactor);
	
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
	
	ctx.fillText("A", -3/scaleFactor, 10);
	
	ctx.restore();
}



$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	draw();
	
	$(canvas).bind("mousewheel",function(ev){
		if( ev.originalEvent.wheelDelta > 0 ){
			if( scaleFactor < 5.0 ){
				scaleFactor += .03;
			}
		} else if( ev.originalEvent.wheelDelta < 1 ){
			if( scaleFactor > 0.1){
				scaleFactor -= .03;
			}
		}
		draw();
	});
});
