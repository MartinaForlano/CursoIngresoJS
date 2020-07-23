function mostrar()
{
	var edadIngresada;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);


	if(edadIngresada<13)
	{
		alert("niño");
	}else
	{
		if(edadIngresada>18)
		{
			alert("mayor");
		}else
		{
			alert("adolescente");
		}
	}
}//FIN DE LA FUNCIÓN
/*
/*
Al ingresar una edad debemos informar si la persona es 
mayor de edad (mas de 18 años) o 
adolescente (entre 13 y 17 años) o 
niño (menor a 13 años)
					*/
/*
function mostrar()
{
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	
	if(edadIngresada<13)
	{
		alert("niño");
	}
	if(edadIngresada>18)
	{
		alert("mayor");
	}else
	{
		alert("adolescente");
	}
	










	if(edadIngresada<13)
	{
		alert("niño");
	}else
	{
		if(edadIngresada>18)
		{
			alert("mayor");
		}else
		{
			alert("adolescente");
		}
	}


	/*
	if(edadIngresada<13)
	{
		alert("niño");
	}
	else
	{
		if(edadIngresada<18)
		{
			alert("adolescente");
		}
		else
		{
			alert("es mayor");
		}
		
	}
	*/

/*
	if(edadIngresada<13)
	{
		alert("niño");
	}
	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("adolescente");
	}
	if(edadIngresada>17)
	{
		alert("es mayor");
	}*/
/*}//FIN DE LA FUNCIÓN*/
