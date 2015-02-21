var ctx;
var scaleFactor = 1.0;


function draw(){
	ctx.clearRect(0,0,360,240);
	
	ctx.save();
	
	ctx.translate(180, 0);
	ctx.scale(scaleFactor, scaleFactor);
	
	ctx.lineWidth = 11.0/Math.max(1.0, scaleFactor);
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
	ctx.strokeStyle = "rgba(0,100,255,"+(1/scaleFactor)+")";
	ctx.beginPath();
	ctx.moveTo(2,0);
	ctx.lineTo(2,200);
	ctx.stroke();
	ctx.closePath();
	
	
	ctx.textAlign = "center";
	ctx.font = (10/scaleFactor) + "px sans-serif";
		
	ctx.fillStyle = "rgba(255,255,255,"+((scaleFactor/3.0)-0.5)+")";
	ctx.fillText("D", 0, 5);
	ctx.fillText("D", 0, 25);
	ctx.fillText("D", 0, 45);
	ctx.fillText("D", 0, 65);
	ctx.fillText("D", 0, 85);
	ctx.fillText("D", 0, 105);
	ctx.fillText("D", 0, 125);
	
	ctx.fillText("U", 4, 5);
	ctx.fillText("U", 4, 25);
	ctx.fillText("U", 4, 45);
	ctx.fillText("U", 4, 65);
	ctx.fillText("U", 4, 85);
	ctx.fillText("U", 4, 105);
	ctx.fillText("U", 4, 125);
	
	ctx.fillStyle = "rgba(255,255,255,1.0)";
	ctx.shadowColor = "rgba(0,100,255,1)";
	ctx.shadowBlur = 6;
	ctx.fillText("A", 2, 35);
	
	ctx.restore();
}



$(document).ready(function(){
	var canvas = document.getElementById("canvas");
	ctx = canvas.getContext("2d");
	
	draw();
	
	$(canvas).bind("mousewheel",function(ev){
		if( ev.originalEvent.wheelDelta > 0 ){
			if( scaleFactor < 3.0 ){
				scaleFactor += .08;
			}
		} else if( ev.originalEvent.wheelDelta < 1 ){
			if( scaleFactor > 1.0){
				scaleFactor -= .08;
			}
		}
		draw();
	});
	
	var touchDistance = null;
	document.addEventListener("touchmove", function(ev){
		ev.preventDefault();
		console.log("touchmove");
		if( ev.targetTouches.length > 1 ){
			var distX = ev.targetTouches[1].pageX - ev.targetTouches[0].pageX;
			var distY = ev.targetTouches[1].pageY - ev.targetTouches[0].pageY;
			var newTouchDistance = Math.sqrt(Math.pow(distX,2) + Math.pow(distY,2));
			if( touchDistance !== null ){
				if( newTouchDistance > touchDistance ){
					scaleFactor += .08;
				} else if( newTouchDistance < touchDistance ) {
					scaleFactor -= .08;
				}
			}
			touchDistance = newTouchDistance;
		}
	});
	
	var touchEnder = function(ev){
		if( ev.cancelable ){
			ev.preventDefault();
		}
		if( ev.targetTouches.length <= 1 ){
			touchDistance = null;
		}
	};
	document.addEventListener("touchend", touchEnder);
	document.addEventListener("touchleave", touchEnder);
	document.addEventListener("touchcancel", touchEnder);
	
});
