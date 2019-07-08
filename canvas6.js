function iniciar(){
	var elemento=document.getElementById('lienzo');
	lienzo=elemento.getContext('2d');
	lienzo.beginPath();
		//aqui va el trazado
	lienzo.closePath();
}
window.addEventListener("load", iniciar, false);