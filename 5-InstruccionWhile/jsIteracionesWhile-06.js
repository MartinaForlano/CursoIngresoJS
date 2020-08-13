
//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.
function mostrar()
{
	var numeroIngresado;
	var contadorNumerosIngresados;
	var acumulador;

	contadorNumerosIngresados=0;
	acumulador=0;

	while(contadorNumerosIngresados<5)
	{
		numeroIngresado=prompt("Ingrese 5 numeros para sumar");
		numeroIngresado=parseInt(numeroIngresado);
		acumulador=acumulador+numeroIngresado;
		contadorNumerosIngresados++;
	}

txtIdSuma.value=acumulador;
txtIdPromedio.value=acumulador/5;

}







/*function mostrar()
{
	//Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.

	var contador;
	var acumulador;
	var numeroIngresado;

	contador=0;
	acumulador=0;

	while(contador<5)
	{
		numeroIngresado = prompt("Ingrese 5 numeros para contar");
		numeroIngresado = parseInt(numeroIngresado);
		acumulador = acumulador + numeroIngresado;
		contador++;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/5;
}//FIN DE LA FUNCIÓN*/