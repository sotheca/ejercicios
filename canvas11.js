function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	
	lienzo.beginPath();
	for(f=0; f<300; f=f+10){
		lienzo.moveTo(0,f);
		lienzo.lineTo(500,f);
	}
	lienzo.stroke();
}
window.addEventListener("load", iniciar, false);