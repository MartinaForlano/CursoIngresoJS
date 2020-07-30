//Forlano, Ejercicio 7.
function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch(destinoIngresado)
	{
		case "Cataratas":
			alert("Se encuentra en el Norte del país");
			break;
		case "Mar del plata":
			alert("Se encuentra en el Este del país");
			break;
		default:
			alert("Se encuentra en el Sur del país");
			break;
	}
}//FIN DE LA FUNCIÓN