/*
	Bienvenidos.
	Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
*/
function mostrar()
{

	var anchoIngresado;
	var largoIngresado;
	var resultadoPerímetro;
	var respuesta;

	respuesta='si';
	resultadoPerímetro=0;

	while(respuesta=='si')
	{
		anchoIngresado=prompt("Ingrese el ancho del rectángulo");
		anchoIngresado=parseInt(anchoIngresado);
		while(isNaN(anchoIngresado)==true)
		{
			anchoIngresado=prompt("Error. Ingrese el ancho del rectángulo");
			anchoIngresado=parseInt(anchoIngresado);
		}
		largoIngresado=prompt("Ingrese el largo del rectángulo");
		largoIngresado=parseInt(largoIngresado);
		while(isNaN(largoIngresado)==true)
		{
			largoIngresado=prompt("error. Ingrese el largo del rectángulo");
			largoIngresado=parseInt(largoIngresado);
		}
		resultadoPerímetro= (anchoIngresado+largoIngresado) *2;

		respuesta=prompt("Quiere seguir ingresando datos?");
	}

	alert("El perímetro es: " + resultadoPerímetro);
}
