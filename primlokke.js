var z=0;
var prim=1;

function primUdregn(){
	for(var j=1;j<=1000;j++){
		prim=1;	
		for(var i=2;i<j;i++){
			z=j%i;
			if (z==0)
				prim=0;
		}
		if (prim==1)
			document.getElementById("primsvar").innerHTML += j+" ";
	}
}

function init(){
	var touchzone = document.getElementById("touchzone");
	touchzone.addEventListener("touchstart", touchHandler, false);
}

function touchHandler(event){
	document.getElementById("koordinater").innerHTML = 'x: ' + event.touches[0].pageX + ', y: ' + event.touches[0].pageY;
}