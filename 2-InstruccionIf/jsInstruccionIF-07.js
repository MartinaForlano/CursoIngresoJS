//Forlano, ejercicio 7.
function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	
	estadoCivilIngresado = estadoCivil.value;

	if((edadIngresada<18) && (estadoCivilIngresado!= "Soltero"))
	{
		alert("Es muy pequeño para NO ser soltero.")
	}
}//FIN DE LA FUNCIÓN