function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	lienzo.beginPath();
	//2da forma
	var radianes=Math.PI/180*45;
	//1ra forma solo esto
	//lienzo.arc(100,100,50,0,Math.PI*2, false);
	//2da forma
	lienzo.arc(100,100,50,0,radianes, false);
	lienzo.stroke();
}
window.addEventListener("load", iniciar, false);