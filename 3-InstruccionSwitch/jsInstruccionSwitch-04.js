//Forlano, ejercicio 4.
function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
	
	switch(mesDelAño)
	{
		
		case ("Febrero"):
			alert("Tiene 28/29 días");
			break;
		case ("Abril"):
		case ("Junio"):
		case ("Septiembre"):
		case ("Noviembre"):
			alert("Tiene 30 días");
			break;
		default:
			alert("Tiene 31 días");
			break;
	}
}//FIN DE LA FUNCIÓN