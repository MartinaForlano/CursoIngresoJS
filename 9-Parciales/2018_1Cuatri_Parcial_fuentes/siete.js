/*
Bienvenidos.

	Realizar el algoritmo que permita el ingreso por prompt de las notas 
	(validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
		a) El promedio de las notas totales.
		b) La nota más baja y el sexo de esa persona.
		c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/


function mostrar()
{
	var notaIngresada;
	var sexoIngresado;
	var contadorAlumnos;
	var contadorVarones;
	var promedioNotasTotales;
	var contadorDeNotas;
	var notaMasBaja;
	var sexoNotaMasBaja;
	var contadorVaronesDesaprobados;

	contadorVaronesDesaprobados=0;
	contadorAlumnos=0;
	contadorDeNotas=0;

	while(contadorAlumnos<3)
	{
		notaIngresada=prompt("Ingrese su nota.");
		notaIngresada=parseInt(notaIngresada);
		while(isNaN(notaIngresada)==true || notaIngresada<0 || notaIngresada>10)
		{
			notaIngresada=prompt("Error. Ingrese su nota entre 0 y 10.");
			notaIngresada=parseInt(notaIngresada);			
		}
		sexoIngresado=prompt("Ingrese su sexo. F para femenino y M para masculino.");
		while(isNaN(sexoIngresado)==false || sexoIngresado!='F' && sexoIngresado!='M')
		{
			sexoIngresado=prompt("Error. Ingrese su sexo. F para femenino y M para masculino.");
		}
		if(contadorDeNotas==0)																										
		{
			notaMasBaja=notaIngresada;
			sexoNotaMasBaja=sexoIngresado;																//b) La nota más baja y el sexo de esa persona.
		}
		else
		{
			if(notaIngresada<notaMasBaja)
			{
				notaMasBaja=notaIngresada
				sexoNotaMasBaja=sexoIngresado;
			}
		}
		if((sexoIngresado=='M') && (notaIngresada<7))													//c) La cantidad de varones que su nota haya sido mayor o igual a 6.
		{
			contadorVaronesDesaprobados++;
		}
		contadorDeNotas++;
		promedioNotasTotales=notaIngresada*contadorDeNotas/10;											//a) El promedio de las notas totales.
		contadorAlumnos++;
	}


document.write("El promedio de las notas totales es: "+promedioNotasTotales+"<br>");
document.write("La nota más baja fue: "+notaMasBaja+" y el sexo de esa persona es: "+sexoNotaMasBaja+"<br>");
document.write("El total de varones desaprobados es: "+contadorVaronesDesaprobados+"<br>");

}

/*
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
*/