
/*Forlano, while 9.
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var primerBandera;

	respuesta='si';
	primerBandera=0;

	while(respuesta=='si')
	{
		numeroIngresado= prompt("Ingrese la cantidad de numeros que quiera");
		numeroIngresado=parseInt(numeroIngresado);
		if(primerBandera==0)
		{
			numeroMaximo=numeroIngresado;
			numeroMinimo=numeroIngresado;
			primerBandera=1;
		}else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo=numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo=numeroIngresado;
			}
		}
		respuesta=prompt("Quiere seguir ingresando numeros?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}










//Forlano, ejercicio nuevo.

/*
	a) Se debe ingresar 10:
	nombre
	edad
	altura
	sexo
	Dinero(puede ser positivo o negativo, pero debe ser un numero)
	CantidadDeHijos
*/


/*
function mostrar()
{
	var respuesta;
	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var CantidadDeHijos;

	respuesta=='si';

	while(respuesta=='si')
	{
		nombreIngresado= prompt("Ingrese su nombre");
		while(!isNan==nombreIngresado)
		{
			nombreIngresado= prompt("Error, reingrese su nombre");
		}

	}
}



/*

Forlano, while 9.
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.
function mostrar()
{	
	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta='si';
	while(respuesta=='si')
	{
		numeroIngresado = prompt("Ingrese numero");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero=="es el primero")
		{
			numeroMaximo= numeroIngresado;
			numeroMinimo= numeroIngresado;
			banderaDelPrimero="ya paso";
		}else
		{
			if(numeroIngresado>numeroMaximo)
			{
				numeroMaximo= numeroIngresado;
			}
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}
		respuesta=prompt("desea continuar?");
	}
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN
*/