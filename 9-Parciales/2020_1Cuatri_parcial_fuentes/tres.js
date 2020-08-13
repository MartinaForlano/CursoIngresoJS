/*
	Enunciado:
	Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
		a) El nombre de la persona con mas temperatura.
		b) Cuantos mayores de edad estan viudos
		c) La cantidad de hombres que hay solteros o viudos.
		d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	var nombreIngresado;
	var edadIngresada;
	var sexoIngresado;
	var estadoCivilIngresado;
	var temperaturaCorporalIngresada;
	var respuesta;
	var mayorTemperaturaCorporalIngresada;
	var nombreConMayorTemperaturaCorporal;
	var banderaViudos;
	var contadorDeViudos;
	var contadorDeSolterosOViudos;
	var contadorAdultosTemperaturaCorporal;
	var banderaTemperatura;
	var banderaSolteros;
	var promedioEdadHombresSolteros;

	respuesta='si';
	mayorTemperaturaCorporalIngresada=0;
	banderaViudos=0;
	contadorDeViudos=0;
	contadorDeSolterosOViudos=0;
	contadorAdultosTemperaturaCorporal=0;
	banderaTemperatura=1;
	banderaSolteros=0;

	while(respuesta=='si')
	{
		nombreIngresado=prompt("Ingrese su nombre");
		while(isNaN(nombreIngresado)==false)
		{
			nombreIngresado=prompt("Error.Ingrese su nombre");
		}
		edadIngresada=prompt("Ingrese su edad");
		edadIngresada=parseInt(edadIngresada);
		while((isNaN(edadIngresada)==true) || edadIngresada<0 || edadIngresada>120)
		{
			edadIngresada=prompt("Error. Ingrese su edad");
			edadIngresada=parseInt(edadIngresada);
		}
		sexoIngresado=prompt("Ingrese su sexo. F para femenino y M para masculino");
		while((isNaN(sexoIngresado)==false) && sexoIngresado!='F' && sexoIngresado!='M')
		{
			sexoIngresado=prompt("Error. Ingrese su sexo. F para femenino y M para masculino");
		}
		estadoCivilIngresado=prompt("Ingrese su estado civil (soltero, casado, viudo)");
		while((isNaN(estadoCivilIngresado)==false) && sexoIngresado!='soltero' && sexoIngresado!='casado' && sexoIngresado!='viudo')
		{
			estadoCivilIngresado=prompt("Error.Ingrese su estado civil (soltero, casado, viudo)");
		}
		temperaturaCorporalIngresada=prompt("Ingrese su temperatura");
		temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		while((isNaN(temperaturaCorporalIngresada)==true) || temperaturaCorporalIngresada<0 || temperaturaCorporalIngresada>50)
		{
			temperaturaCorporalIngresada=prompt("Error. Ingrese su temperatura");
			temperaturaCorporalIngresada=parseInt(temperaturaCorporalIngresada);
		}

		if(mayorTemperaturaCorporalIngresada==temperaturaCorporalIngresada)																	//a) El nombre de la persona con mas temperatura.
		{
			temperaturaCorporalIngresada=mayorTemperaturaCorporalIngresada;
			nombreConMayorTemperaturaCorporal=nombreIngresado;
			nombreIngresado=nombreConMayorTemperaturaCorporal;
		}else
		{
			if(temperaturaCorporalIngresada>mayorTemperaturaCorporalIngresada)
			{
				temperaturaCorporalIngresada=mayorTemperaturaCorporalIngresada;
				nombreConMayorTemperaturaCorporal=nombreIngresado;
				nombreIngresado=nombreConMayorTemperaturaCorporal;
			}
		}
		if(edadIngresada>18)																												//b) Cuantos mayores de edad estan viudos
		{
			if(estadoCivilIngresado=='viudo')
			{
				if(banderaViudos==0)
				{
					contadorDeViudos++;
					banderaViudos=1;
				}
			}
		}
		if((sexoIngresado=='M') && (estadoCivilIngresado!='casado'))																		//c) La cantidad de hombres que hay solteros o viudos.
		{
			contadorDeSolterosOViudos++;
		}else
		{
			if(sexoIngresado=='M')
			{
				banderaSolteros++;
			}
		}

		if((edadIngresada>60) || (temperaturaCorporalIngresada>38))
		{
			
			if(banderaTemperatura=1)																										//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
			{
				banderaTemperatura=2;
				contadorAdultosTemperaturaCorporal=contadorAdultosTemperaturaCorporal+1;
				
			}
		}

		respuesta=prompt("Quiere ingresar otro dato?");
		document.write("La persona con mayor temperatura corporal es: "+nombreConMayorTemperaturaCorporal+"<br>");


		if(estadoCivilIngresado=='viudo')
		{
			document.write("En total hay: "+contadorDeViudos+ " mayores de edad viudos. <br>");
		}
		else
		{
			if((estadoCivilIngresado!='casado') && (sexoIngresado=='M'))
			{
				document.write("En total se registraron "+contadorDeSolterosOViudos+" hombres solteros o viudos.<br>");
			}else
			{
				document.write("No se registraron personas viudas.<br>");
			}
		}
		if((edadIngresada>60) || (temperaturaCorporalIngresada>38))
		{
			document.write("En total hay: "+contadorAdultosTemperaturaCorporal+" personas adultas con temperatura corporal mayor a 38 <br>");
		}else
		{
			if((edadIngresada<60) && (temperaturaCorporalIngresada<38))
			{
				document.write("No se registraron personas mayores de 60 años con alta temperatura corporal. <br>");
			}
			
		}
		

		




	}



}
