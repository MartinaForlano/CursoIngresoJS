function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	
	estadoCivilIngresado = estadoCivil.value;

	if((edadIngresada>17) && (estadoCivilIngresado == "Soltero"))
	{
		alert("es soltero y no es menor");
	}
	else
	{

	}
}//FIN DE LA FUNCIÓN