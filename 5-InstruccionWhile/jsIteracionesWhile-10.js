/*Forlano, Enunciado B.
Enunciado a)”bandera a full”
			de una cantidad de espectadores indeterminada debemos tomar lo siguiente datos
			validados:
			sexo
			altura
			edad
			nombre
			se debe informar:
			1-el nombre de la más alta de las mujeres
			2-el nombre del más viejo de los hombres
			3-el nombre del primer adolescente ingresado, (solo mostrar si y sólo si hay algún
			adolescente)
Enunciado b)”sin banderas”
			Se debe ingresar 10 personas con sus datos validados:
			nombre
			edad(0 y 115)
			altura(30 y 230)
			sexo
			Dinero(puede ser positivo o negativo, pero debe ser un número)
			CantidadDeHijos(0 y 10)
			se debe informar:
			1- nombre de la persona con edad más vieja
			2- promedio de altura de las mujeres
			3- nombre de la mujer más joven
Enunciado c-”mixing bandera”
			de una cantidad de animales indeterminada del zoológico debemos tomar los siguientes
			datos validados:
			raza
			peso
			temperatura media del lugar donde habita
			edad
			si está en peligro de extinción( si o no)
			se debe informar:
			1-el promedio de edad total
			2-la raza del más pesado
			3-la temperatura máxima ingresada de los animales en extinción
*/


function mostrar()
{

	var razaAnimal;
	var pesoDelAnimal;
	var temperaturaDelLugar;
	var edadDelAnimal;
	var peligroDeExtincion;
	var respuesta;

	respuesta='si';

	while(respuesta=='si')
	{
		razaAnimal=prompt("Ingrese la raza");
		while(isNaN(razaAnimal)==false)
		{
			razaAnimal=prompt("Error. Ingrese la raza");
		}
		pesoDelAnimal=prompt("Ingrese el peso del animal");
		pesoDelAnimal=parseInt(pesoDelAnimal);
		while(isNaN(pesoDelAnimal)==true)
		{
			razaAnimal=prompt("Error. Ingrese el peso.");
			pesoDelAnimal=parseInt(pesoDelAnimal);
		}


		respuesta=prompt("Quiere ingresar algo más?");
	}











}























/*
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantidadDeHijos;
	var respuesta;
	var edadMasVieja;
	var nombrePersonMasVieja;
	var alturaMujerMasAlta;
	var contadorDeMujeres;
	var nombreMujerMasAlta;
	var promedioAlturaDeMujeres;
	var nombreMujerMasJoven;
	var edadMujerMasJoven;


	edadMasVieja=0;
	respuesta='si';
	contadorDeMujeres=0;

	while(respuesta=='si')
	{
		nombreIngresado=prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error. Ingrese su nombre sin numeros ni simbolos");
		}
		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);

		while(isNaN(edadIngresada)==true || edadIngresada<0 && edadIngresada>115)
		{
			edadIngresada=prompt("Error. Ingrese una edad valida");
			edadIngresada=parseInt(edadIngresada);
		}
		alturaIngresada=prompt("Ingrese su altura");
		alturaIngresada=parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 && alturaIngresada>250)
		{
			alturaIngresada=prompt("Vuelva a ingresar su altura");
			alturaIngresada=parseInt(alturaIngresada);
		}
		sexoIngresado=prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado)==true && sexoIngresado!='f' && sexoIngresado!='m')
		{
			sexoIngresado=prompt("Error. Ingrese 'f' para femenino o 'm' para masculino");
		}
		dineroIngresado=prompt("Ingrese dinero");
		dineroIngresado=parseInt(dineroIngresado);
		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("Ingrese sólo numeros");
			dineroIngresado=parseInt(dineroIngresado);

		}
		cantidadDeHijos=prompt("Ingrese la cantidad de hijos");
		cantidadDeHijos=parseInt(cantidadDeHijos);
		while(isNaN(cantidadDeHijos)==true || cantidadDeHijos<0 || cantidadDeHijos>10)
		{
			cantidadDeHijos=prompt("Error. Ingrese cantidad de hijos");
			cantidadDeHijos=parseInt(cantidadDeHijos);
		}

		if(edadIngresada==edadMasVieja)															//1- nombre de la persona con edad más vieja
		{
			edadMasVieja=edadIngresada;
			nombrePersonMasVieja=nombreIngresado;
		}
		else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
				nombrePersonMasVieja=nombreIngresado;
			}
		}
		if(sexoIngresado=='f')
		{
			alturaMujerMasAlta=alturaIngresada;
			nombreMujerMasAlta=nombreIngresado;
			edadMujerMasJoven=edadIngresada;													//3- nombre de la mujer más joven
			nombreMujerMasJoven=nombreIngresado;
		}else
		{
			if(alturaIngresada>alturaMujerMasAlta)
				{
					alturaIngresada=alturaMujerMasAlta;
					nombreMujerMasAlta=nombreIngresado;
				}
		}if(edadIngresada<edadMasVieja)
		{
			edadMujerMasJoven=edadIngresada;
			nombreMujerMasJoven=nombreIngresado;
		}
		contadorDeMujeres=contadorDeMujeres+1;




	respuesta=prompt("quiere seguir ingresando datos?");
	}

	if(edadMasVieja>edadIngresada)				
	{
		document.write("La persona más vieja es: " +nombrePersonMasVieja+"<br>");
	}
	if(edadIngresada<edadMasVieja)
	{
		document.write("La mujer más joven es: "+nombreMujerMasJoven+"<br>");
	}
	if(contadorDeMujeres!=0)
	{
		document.write("La mujer más alta es: "+nombreMujerMasAlta+"<br>");							//2- promedio de altura de las mujeres
		promedioAlturaDeMujeres=alturaMujerMasAlta/contadorDeMujeres;
		document.write("El promedio de altura de las mujeres es: "+promedioAlturaDeMujeres+"<br>");

	}
	else
	{
		document.write("No se ingresaron mujeres<br>");
	}
}

*/





/*
function mostrar()
{
	//ENUNCIADO A.
	var sexoIngresado;
	var alturaIngresada;
	var edadIngresada;
	var nombreIngresado;
	var respuesta;
	var contadorAlturaMujeres;
	var banderaContadorAlturaMujeres;
	var alturaMujerMasAlta;
	var nombreMujerMasAlta;
	var banderaHombreMasViejo;
	var edadHombreMasViejo;
	var nombreHombreMasGrande;
	var banderaAdolescentes;
	var edadAdolescente;
	var nombreDelAdolescente;

	banderaAdolescentes=0;
	banderaHombreMasViejo=0;
	banderaContadorAlturaMujeres=0;
	respuesta='si';

	while(respuesta=='si')
	{	//validar los datos
		sexoIngresado=prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado==true) && sexoIngresado!='f' && sexoIngresado!= 'm')
		{
			sexoIngresado=prompt("Error. Ingrese 'f' para femenino o 'm' para masculino");
		}
		alturaIngresada=prompt("Ingrese su altura en cm.");
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>250)
		{
			alturaIngresada=prompt("Error, ingrese su altura en cm.");
			alturaIngresada=parseInt(alturaIngresada);
		}
		edadIngresada=prompt("Ingrese su edad");
		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("Error. Ingrese su edad");
			edadIngresada=parseInt(edadIngresada);
		}
		nombreIngresado=prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Ingrese su nombre sin numeros o simbolos");
		}
		if(sexoIngresado=='f')													//1-el nombre de la más alta de las mujeres
		{
			if(banderaContadorAlturaMujeres==0)
			{
				alturaMujerMasAlta=alturaIngresada;
				nombreMujerMasAlta=nombreIngresado;
				banderaContadorAlturaMujeres==1;
			}else
			{
				if(alturaIngresada>alturaMujerMasAlta)
				{
					alturaIngresada=alturaMujerMasAlta;
					nombreMujerMasAlta=nombreIngresado;
				}
			}
		}else
		{
			if(banderaHombreMasViejo==0)										//2-el nombre del más viejo de los hombres
			{
				banderaHombreMasViejo=1;
				edadHombreMasViejo=edadIngresada;
				nombreHombreMasGrande=nombreIngresado;
			}
			else
			{
				if(edadIngresada>edadHombreMasViejo)
				{
					edadIngresada=edadHombreMasViejo;
					nombreHombreMasGrande=nombreIngresado;
				}
			}
		}
		if(edadIngresada>13 || edadIngresada<19)								//3-el nombre del primer adolescente ingresado
		{
			if(banderaAdolescentes=0)
			{
				edadAdolescente=edadIngresada;
				nombreDelAdolescente=nombreIngresado;
				banderaAdolescentes=1;
			}			
		}	
	}

	if(banderaContadorAlturaMujeres!=0)
	{
		document.write("La mujer más alta es: "+nombreMujerMasAlta+"<br>");
	}
	else
	{
		document.write("No hay mujeres.<br>");
	}

	respuesta=prompt("quiere seguir ingresando datos?");
	}
	if(banderaHombreMasViejo!=0)
	{
		document.write("El hombre mas viejo es: "+nombreHombreMasGrande+"<br>");
	}
	else
	{
		document.write("No hay hombres ingresados. <br>");
	}
	if(banderaAdolescentes!=0)
	{
		document.write("El primer adolescente ingresado es: "+nombreDelAdolescente+"<br>");
	}
	else
	{
		document.write("No hay adolescentes.<br>");
	}

}//FIN DEL ENUNCIADO A.






























































/*
/*Al presionar el botón pedir números hasta que el usuario quiera, mostrar:
	1-Suma de los negativos. 
	2-Suma de los positivos. 
	3-Cantidad de positivos.
	4-Cantidad de negativos. 
	5-Cantidad de ceros. 
	6-Cantidad de números pares. 
	7-Promedio de positivos. 
	8-Promedios de negativos.
	9-Diferencia entre positivos y negativos, (positvos-negativos).

function mostrar()
{
	var numeroIngresado;
	var respuesta;
	var sumaDeNegativos;
	var contadorDeCeros;
	var sumaDePositivos;
	var acumuladorDePositivos;
	var acumuladorDeNegativos;
	var acumuladorDePares;
	var contadorDePares;
	var promedioDePositivos;
	var promedioDeNegativos;
	var diferenciaDeNegativos;
	var diferenciaDePositivos;

	sumaDeNegativos=0;
	sumaDePositivos=0;
	acumuladorDePositivos=0;
	acumuladorDeNegativos=0;
	contadorDeCeros=0;
	acumuladorDePares=0;
	contadorDePares=0;
	respuesta='si';


	while(respuesta=='si')
	{
		numeroIngresado=prompt("Ingrese un numero para calcular.");
		numeroIngresado=parseInt(numeroIngresado);
		if(numeroIngresado<0)
		{
			sumaDeNegativos= sumaDeNegativos + numeroIngresado; 				//1-Suma de los negativos. 
			acumuladorDeNegativos++;											//4-Cantidad de negativos. 
			promedioDeNegativos=sumaDeNegativos*acumuladorDeNegativos/100;		//8-Promedios de negativos.
		}else
		{
			if(numeroIngresado>0)									
			{
				sumaDePositivos=sumaDePositivos+numeroIngresado;				//2-Suma de los positivos. 
				acumuladorDePositivos++;										//3-Cantidad de positivos.
				promedioDePositivos=sumaDePositivos*acumuladorDePositivos/100;	//7-Promedio de positivos. 
			}
			else
			{
				contadorDeCeros++;												//5-Cantidad de ceros. 
			}
		}
		if(numeroIngresado%2==0)												//6-Cantidad de números pares.
		{
			acumuladorDePares= acumuladorDePares+numeroIngresado;
			contadorDePares++;
		}

	diferenciaDeNegativos= sumaDeNegativos%acumuladorDeNegativos;				//9-Diferencia entre positivos y negativos, (positvos-negativos).
	diferenciaDePositivos= sumaDePositivos %acumuladorDePositivos;				//9-Diferencia entre positivos y negativos, (positvos-negativos).

	respuesta=prompt("Quiere seguir ingresando numeros?");
	}	
	document.write("La suma de negativos es: "+sumaDeNegativos+"<br>");
	document.write("La suma de positivos es: "+sumaDePositivos+"<br>");
	document.write("La cantidad de negativos es: "+acumuladorDeNegativos+"<br>");
	document.write("La cantidad de positivos es: "+acumuladorDePositivos+"<br>");
	document.write("La cantidad de ceros es: "+contadorDeCeros+"<br>");
	document.write("La cantidad de numeros pares es: "+contadorDePares+"<br>");
	document.write("El promedio de los numeros positivos es: "+promedioDePositivos+"<br>");
	document.write("La diferencia de negativos es: "+diferenciaDeNegativos+"<br>");
	document.write("La diferencia de positivos es: "+diferenciaDePositivos+"<br>");
}




*/





//Forlano, ejercicio nuevo.

/*
	a) Se debe ingresar 10:
	nombre
	edad(0 y 115)
	altura(30 y 230)
	sexo
	Dinero(puede ser positivo o negativo, pero debe ser un numero)
	CantidadDeHijos(0 y 10)

	1- edad mas vieja
	2- nombre de la persona con edad mas vieja
	3- cantidad de mujeres

	4- de los hombres el mas viejo
	5- de las mujeres la mas alta  

	6- la altura del hombre mas viejo
	7- el nombre y sexo de la persona con mas dinero
	8- cantidad de personas con dinero menor a cero
	9- promedio de edad de las mujeres
*/





/*

function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var alturaIngresada;
	var sexoIngresado;
	var dineroIngresado;
	var cantidadDeHijos;
	var respuesta;
	var edadMasVieja;
	var contador;
	var nombrePersonaMasGrande;
	var contadorDeMujeres;
	var banderaHombres;
	var alturaMujerMasAlta;
	var nombreMujerMasAlta;
	var edadHombreMasViejo;
	var nombreHombreMasGrande;
	var alturaHombreMasAlto;

	contadorMujeres=0;
	edadMasVieja=0;
	contador=0;
	respuesta='si';
	banderaHombres=0;

	//validar los datos
	while(contador<4)
	{
		nombreIngresado= prompt("Ingrese su nombre");

		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado= prompt("Error. Reingrese su nombre");
		}

		edadIngresada= prompt("Ingrese su edad");
		edadIngresada= parseInt(edadIngresada);

		while(isNaN(edadIngresada)==true || edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada=prompt("Error. Reingrese su edad");
			edadIngresada= parseInt(edadIngresada);
		}

		alturaIngresada= prompt("Ingrese su altura en cm");
		alturaIngresada= parseInt(alturaIngresada);
		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada= prompt("Error. Ingrese su altura en cm"); 
			alturaIngresada= parseInt(alturaIngresada);
		}

		sexoIngresado= prompt("Ingrese su sexo");
		while(isNaN(sexoIngresado)==false || sexoIngresado!='f' && sexoIngresado!='m')
		{
			sexoIngresado= prompt("Error. Vuelva a ingresar su sexo");
		}

		dineroIngresado= prompt("Ingrese dinero");
		dineroIngresado= parseInt(dineroIngresado);
		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("El dato que intenta ingresar no es válido", "vuelva a ingresar el monto");
			dineroIngresado= parseInt(dineroIngresado);
		}
		cantidadDeHijos= prompt("Ingrese su cantidad de hijos");
		cantidadDeHijos= parseInt(cantidadDeHijos);

		while(isNaN(cantidadDeHijos)==true || cantidadDeHijos<0 || cantidadDeHijos>10)
		{
			cantidadDeHijos= prompt("Error.Ingrese una cantidad de hijos válida");
			cantidadDeHijos= parseInt(cantidadDeHijos);
		}
		//------------Fin validación de datos------------------

		//1) tomar la edad más vieja
		//2)En el mismo punto tomamos el nombre de la edad más vieja.
		if(edadIngresada==edadMasVieja)
		{
			edadMasVieja=edadIngresada;
			nombrePersonaMasGrande= nombreIngresado;
		}
		else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja=edadIngresada;
				nombrePersonaMasGrande= nombreIngresado;
			}
		}
		//3- cantidad de mujeres
		if(sexoIngresado=='f')
		{
			contadorMujeres=contadorMujeres+1;
			if(contadorMujeres==1)
			{
				alturaMujerMasAlta=alturaIngresada; 	//5- de las mujeres la mas alta  
				nombreMujerMasAlta= nombreIngresado;
			}
			else
			{
				if(alturaIngresada>alturaMujerMasAlta)
				{
					alturaIngresada=alturaMujerMasAlta;
					nombreMujerMasAlta= nombreIngresado;
				}
			}
		}
		else
		{
			if(banderaHombres==0)
			{
				banderaHombres=1;
				edadHombreMasViejo= edadIngresada;	//4- de los hombres el mas viejo
				nombreHombreMasGrande=nombreIngresado;
				alturaHombreMasAlto=alturaIngresada;
				
			}
			else
			{
				if((edadIngresada>edadHombreMasViejo) || (alturaIngresada>alturaHombreMasAlto))
				{
					edadIngresada=edadHombreMasViejo;
					nombreHombreMasGrande=nombreIngresado;
					alturaIngresada=alturaHombreMasAlto;						
				}
			}
		}



		contador++;

	document.write("La edad más vieja ingresada es: "+edadMasVieja+"<br>");
	document.write("La persona más grande es: "+nombrePersonaMasGrande+"<br>");
	document.write("En total hay :"+contadorMujeres+" mujeres <br>");
	document.write("El hombre más viejo es: "+nombreHombreMasGrande+"<br>");
	document.write("La mujer más alta es: "+nombreMujerMasAlta+"<br>");
	document.write("El hombre más viejo mide: "+alturaHombreMasAlto+"<br>");
	}




}




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
	var cantidadDeHijos;
	var edadMasVieja;
	var contador;
	var contadorMujeres;
	var nombreMasVieja;
	var contadorAltura;
	var mayorAltura;
	var contadorHombres;

	contador=0;
	contadorMujeres=0;
	respuesta='si';
	contadorHombres=0;
	contadorAltura=0;
	//validaciones.

	while(contador<4)
	{
		nombreIngresado= prompt("Ingrese su nombre");
		while(!isNaN(nombreIngresado)==true)
		{
			nombreIngresado= prompt("Error, reingrese su nombre");
		}

		edadIngresada= prompt("Ingrese su edad");
		edadIngresada= parseInt(edadIngresada);

		while(isNaN (edadIngresada)==true || edadIngresada<0 || edadIngresada>115)
		{
			edadIngresada= prompt("Error, ingrese una edad entre válida");
		}

		alturaIngresada= prompt("Ingrese su altura");
		alturaIngresada= parseInt(alturaIngresada);

		while(isNaN(alturaIngresada)==true || alturaIngresada<30 || alturaIngresada>230)
		{
			alturaIngresada=prompt("Error, reingrese altura");
		}
		sexoIngresado=prompt("Ingrese su sexo. f para femenino, m para masculino");


		while(isNaN(sexoIngresado)==true && sexoIngresado!="f" && sexoIngresado!="m")
		{
			sexoIngresado=prompt("Error. Ingrese su sexo. f para femenino, m para masculino");
		}

		dineroIngresado=prompt("Ingrese dinero");
		dineroIngresado= parseInt(dineroIngresado);

		while(isNaN(dineroIngresado)==true)
		{
			dineroIngresado=prompt("Error. Ingrese un número");
		}

		cantidadDeHijos= prompt("Ingrese la cantidad de hijos");
		cantidadDeHijos= parseInt(cantidadDeHijos);
		while(isNaN(cantidadDeHijos)==true|| cantidadDeHijos<0 || cantidadDeHijos>10)
		{
			cantidadDeHijos=prompt("Error. Ingrese la cantidad de hijos");
		}
		if(contador==0)
		{
			edadMasVieja= edadIngresada;
			nombreMasVieja= nombreIngresado;
		}else
		{
			if(edadIngresada>edadMasVieja)
			{
				edadMasVieja= edadIngresada;
				nombreMasVieja= nombreIngresado;
			}
		}
		//cantidad de mujeres.
		if(sexoIngresado=='f')
		{
			contadorMujeres++;
		}

		if(contadorAltura==0 && sexoIngresado=="f")
		{
			mayorAltura = alturaIngresada;
		}else
		{
			if(alturaIngresada>mayorAltura && sexoIngresado=="f")
			{
				mayorAltura=alturaIngresada;
			}
		}contadorAltura++;
		if(contadorHombres==0)
		{
			if(sexoIngresado=='m')
			{
				edadMasVieja= edadIngresada;
				nombreMasVieja= nombreIngresado;
			}
			else
			{
				if(edadIngresada>edadMasVieja)
				{
					edadMasVieja= edadIngresada;
					nombreMasVieja= nombreIngresado;
				}
			}
			contador++;
		}

	document.write("Nombre ingresado: "+nombreIngresado+"<br>");
	document.write("Edad ingresada: "+edadIngresada+"<br>");
	document.write("Altura ingresada: "+alturaIngresada+"<br>");
	document.write("Sexo ingresado: "+sexoIngresado+"<br>");
	document.write("Dinero ingresado: "+dineroIngresado+"<br>");
	document.write("Cantidad de hijos ingresada: "+cantidadDeHijos+"<br>");
	document.write("La edad más vieja ingresada es: "+edadMasVieja+"<br>");
	document.write("La persona más vieja es: "+nombreMasVieja+"<br>");
	document.write("Cantidad de mujeres: "+contadorMujeres+"<br>");
	document.write("La mujer más alta mide: " + alturaIngresada+"<br>");
	document.write("El hombre más viejo tiene: "+edadMasVieja+" años. <br>");
	}
}



/*
Agregado while

Ingrese una edad(0 y 120), nombre y un sexo(f o m)
informar:
nivel 1:
cuantos son en total 
cuantos mayores de edad 
cuantos menores de edad 
cuantos adolescentes de edad 
la edad mas vieja;
la edad mas joven;

nivel:2

cuantas mujeres;
cuantos hombres;
cuantas adolescentes mujeres 
cuantos niños hombres 
el promedio de edad
el promedio de edad de las mujeres
el promedio de edad de los hombres
la cantidad de edades pares 

nivel 3:


el nombre de la persona mas vieja
el nombre de la persona mas joven

el sexo de la persona mas vieja
el sexo de la persona mas joven

nivel dios:

cuantas personas hay con la edad minima
cuantas personas hay con la edad maxima
el nombre de la ultima persona con la mayor edad encontrada
el nombre de la ultima persona con la menor edad encontrada

*/