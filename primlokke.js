var canvas;
var ctx;
var gammel=null;


function init()
{
	var touchzone = document.getElementById("mycanvas");
	touchzone.addEventListener("touchmove", opdaterCanvas, false);
	touchzone.addEventListener("touchend", end, false);
	ctx = touchzone.getContext("2d");
}

function opdaterCanvas(e)
{
	e.preventDefault();
	if(gammel!=null)
	{
		ctx.beginPath();
		ctx.moveTo(gammel.x, gammel.y);
		ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
		ctx.stroke();
	}
	gammel={x:e.touches[0].pageX, y:e.touches[0].pageY};
}

function end(e)
{
	e.preventDefault();
	gammel=null;
}
