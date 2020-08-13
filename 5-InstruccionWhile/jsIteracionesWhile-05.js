/*Forlano, while 5. (corregido)
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/



function mostrar()
{
	var sexoIngresado;

	sexoIngresado=prompt("Ingrese 'f' para femenino y 'm' para masculino");

	while(isNaN(sexoIngresado)==false || sexoIngresado!='f' && sexoIngresado!='m')
	{
		sexoIngresado=prompt("Error. Ingrese 'f' para femenino y 'm' para masculino");
	}

	txtIdSexo.value=sexoIngresado;
}





























































/*
function mostrar()

{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while(sexoIngresado!= "f" && sexoIngresado!= "m")
	{
		alert("el sexo ingresado no es m o f");
		sexoIngresado = prompt("Intentelo nuevamente");
	}
	txtIdSexo.value="sexo ingresado: " +sexoIngresado;
}//FIN DE LA FUNCIÓN*/