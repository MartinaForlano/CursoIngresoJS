//Forlano,agregado A.
function mostrar()
{	
	/*Se pide ingresar una edad y un estado cicvil
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

	switch(edadIngresada)
	{
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
			alert("respeta a tus mayores");
			alert("hagan la tarea");
				break;
		default:
			alert("Se responsable");
				break;
	}
	if(edadIngresada<18 && estadoCivilIngresado!= "Soltero")
		{
			alert("sos muy joven para no ser soltero");
		}else
		{
			switch(estadoCivilIngresado)
			{
				case "Casado":
					alert("a disfrutar la pareja");
						break;
				case "Divorciado":
					alert("a intentarlo nuevamente");
						break;
				default:
					alert("a vivir la vida");
						break;
			}
		}
}

/*Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"

	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"

	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los niños tambien informar "hagan la tarea" 

	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

	*/

	/*var edadIngresada;
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
		else 
		{
			if(estadoCivilIngresado == "Casado")
			{
				alert("a disfrutar la pareja");
			}else
				{
					alert("a intentarlo nuevamente");
				}
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
	}//Fin versión IF (corregir corchetes)
}*/

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