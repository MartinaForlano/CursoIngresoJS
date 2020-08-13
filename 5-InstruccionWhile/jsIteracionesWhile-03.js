/*Forlano, WHILE 3. (corregido)
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/




function mostrar()
{

	var claveIngresada;
	claveIngresada=='utn750';

	claveIngresada=prompt("ingrese la clave.");

	while(claveIngresada!='utn750')
	{
		claveIngresada=prompt("Error, reingrese la clave.");
	}
	alert("Bienvenido!");

}
