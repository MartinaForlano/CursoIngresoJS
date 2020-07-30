/*Forlano, WHILE 3. (corregido)
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;

	claveIngresada = prompt("ingrese el número clave.");

	while(claveIngresada!= "utn750")
	{
		alert("Error");
		claveIngresada= prompt("vuelva a ingresar la clave");
	}
	alert("Bienvenidx!");
}//FIN DE LA FUNCIÓN
