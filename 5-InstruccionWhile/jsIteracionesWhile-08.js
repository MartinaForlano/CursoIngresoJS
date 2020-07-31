/*
Al presionar el botón pedir números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var numeroIngresado;
	var multiplicacionNegativos;

	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta='si';

	while(respuesta=='si')
	{
		numeroIngresado = prompt("Ingrese numeros para contar");
		numeroIngresado = parseInt(numeroIngresado);
		contador++;
		if(numeroIngresado>0)
		{
			sumaPositivos=sumaPositivos + numeroIngresado;

		}else
		{
			if(numeroIngresado<0)
			{
				multiplicacionNegativos=multiplicacionNegativos*numeroIngresado;
			}
		}
	respuesta = prompt("Quiere seguir ingresando numeros?", "ingrese si o no");
	}

	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN