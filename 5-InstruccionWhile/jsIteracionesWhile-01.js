/*
Forlano, WHILE 1.
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	
	var numero;

	numero = 0;

	while(numero<10)
	{
		numero++;
		console.log(numero);
	}
}
	/*var numero;

	numero=0;//1era parte inicializacion de variabe
	while(numero<10)//2da Parte logica crrecta
	{
		console.log(numero);
		numero=numero+1;//3era modificar elvalor parala logica
	}	

	/*
	var ingresoClave;

	while(ingresoClave!="clavesecreta")
	{
		alert("error");
		ingresoClave=prompt("ingrese la clave secreta");
	}
	alert("bienvenido");
*/
//}//FIN DE LA FUNCIÓN

/*
	numero=numero+1;//3era modificar elvalor parala logica
		//o
		numero++;
		//este nunca
		numero=numero++;//mal

		numero=numero-1;
		//o
		numero--;
		//este nunca
		numero= numero--;//mal
*/