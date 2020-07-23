//Forlano,ejercicio 8.
function mostrar()
{	/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"

	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"

	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los niños tambien informar "hagan la tarea" 

	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

	*/

	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);
	
	estadoCivilIngresado = estadoCivil.value;

	if(edadIngresada>59)
	{
		alert("sos persona de riesgo");

		if(estadoCivilIngresado == "Soltero")
		{
			alert("a vivir la vida");
		}
		if(estadoCivilIngresado == "Casado")
		{
			alert("a disfrutar la pareja");
		}
		if(estadoCivilIngresado == "Divorciado")
		{
			alert("a intentarlo nuevamente");
		}
	}
	if(edadIngresada>17)
	{
		alert("Se responsable");
		if((estadoCivilIngresado != "Soltero") && (edadIngresada<50))
		{
			alert("sos muy joven para no ser soltero");
		}
	}
	else
	{
		alert("respeta a tus mayores");
		alert("hagan la tarea");
	}

}

	/*
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

	}*/
	//}//FIN DE LA FUNCIÓN