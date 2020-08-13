/*Forlano, while 4 (corregido)
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/

function mostrar()
{
	var numeroIngresado;

	numeroIngresado=prompt("Ingrese un numero entre 0 y 9");

	while(isNaN(numeroIngresado)==true || numeroIngresado<0 || numeroIngresado>10)
	{
		numeroIngresado=prompt("Error.Ingrese un numero entre 0 y 9");
	}

	txtIdNumero.value=numeroIngresado;
}






























































/*
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 9.");
	numeroIngresado = parseInt(numeroIngresado);

	while(numeroIngresado<0 || numeroIngresado>9)
	{
		alert("El numero no  está entre 0 o 9");
		numeroIngresado = prompt("Ingrese un número entre 0 y 9");
	}
	txtIdNumero.value = numeroIngresado;
}//FIN DE LA FUNCIÓN


/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.
function mostrar()
{
	var numero;

	numero=0;//1era parte inicializacion de variabe
	while(numero<4)//2da Parte logica correcta
	{
		document.write("<br>"+numero);
		numero=numero+1;//3era modificar elvalor parala logica
	}

	// cuanto vale numero aqui?	
	document.write("<br>"+ numero);

}//FIN DE LA FUNCIÓN*/
