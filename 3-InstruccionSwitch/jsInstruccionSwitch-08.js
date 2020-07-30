//Forlano, ejercicio 8.
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
		case "Mar del plata":
			alert("Aquí  hace calor");
			break;
		default:
			alert("Aquí hace frío");
			break;
	}
}//FIN DE LA FUNCIÓN