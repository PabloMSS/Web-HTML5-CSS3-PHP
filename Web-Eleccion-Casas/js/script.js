var imprimirPrecio=document.getElementById("salida");

function calcularPrecio(){
	var localizacionPiso=document.getElementById("localizacion").value;
	var imprimirPrecio=document.getElementById("salida");
	imprimirPrecio.innerHTML="Precio por Metro: "+localizacionPiso+"€/metros";
	precioAlquiler();
}

function precioAlquiler(){
	var localizacionPiso=document.getElementById("localizacion").value;//Precio por metro
	var imprimirPrecio=document.getElementById("salida");
	var tipoPiso;
	var precioAlquiler;
	
	if(document.getElementById("tipo1").checked==true){
		tipoPiso=50;
	}else if(document.getElementById("tipo2").checked==true){
		tipoPiso=70;
	}else{
		tipoPiso=100;
	}
	precioAlquiler= tipoPiso * localizacionPiso;
	imprimirPrecio.innerHTML=imprimirPrecio.innerHTML+"<br>"+"Precio del Alquiler: "+precioAlquiler+"€";

	var aumentos = 0;
	var precioConAumentos= 0;
	if(document.getElementById("extra4").checked==true){
		aumentos=0;
	}
	if(document.getElementById("extra1").checked==true){
		aumentos=aumentos + 0.03;
		if(document.getElementById("extra4").checked==true){
			aumentos=0;
		}
	}
	if(document.getElementById("extra2").checked==true){
		aumentos=aumentos + 0.03;
		if(document.getElementById("extra4").checked==true){
			aumentos=0;
		}
	}
	if(document.getElementById("extra3").checked==true){
		aumentos=aumentos + 0.03;
		if(document.getElementById("extra4").checked==true){
			aumentos=0;
		}
	}

	var TipoExtra="";
	switch (aumentos){
		case 0.03:
			if(document.getElementById("extra1").checked==true){
				TipoExtra="Calefación";
			}else if(document.getElementById("extra2").checked==true){
				TipoExtra="Aire Acondicionado";
			}else{
				TipoExtra="Bañera de Hidromasaje";
			}
				break;
		case 0.06:
			if(document.getElementById("extra1").checked==true && document.getElementById("extra2").checked==true){
				TipoExtra="Calefación e Aire Acondicionado";
			}else if(document.getElementById("extra1").checked==true && document.getElementById("extra3").checked==true){
				TipoExtra="Calefación y Bañera de Hidromasaje";
			}else{
				TipoExtra="Aire Acondicionado y Bañera de Hidromasaje";
			}
				break;
		case 0.09:
			TipoExtra="Calefación, Aire Acondicionado y Bañera de Hidromasaje";
			break;
	}

	aumentos=aumentos*precioAlquiler;
	precioConAumentos=aumentos + precioAlquiler;
	imprimirPrecio.innerHTML=imprimirPrecio.innerHTML+"<br>"+"Precio de Aumentos: "+aumentos+"€ "+TipoExtra+"<br>"+"Precio Total con Aumentos: "+precioConAumentos+"€";
}


