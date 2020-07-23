
function mostrar()
{
	var edadIngresada;

	edadIngresada = txtIdEdad.value;
	edadIngresada = parseInt(edadIngresada);

	
	if(edadIngresada>12 && edadIngresada<18)
	{
		alert("usted es adolescente");
	}
	else
	{
		alert("no es adolescente");
	}

	/*if(edadIngresada>12 && edadIngresada<18)
	{
		alert("Usted es adolescente");
	}
	else
	{
		alert("no es adolescente");
	}*/
	/*
	function mostrar()
{
	var edadIngresada;
	edadIngresada=txtIdEdad.value;
	edadIngresada=parseInt(edadIngresada);
	//errores
	if(edadIngresada>17 && edadIngresada<13)//ninguna
	{
		alert("nunca entra");
	}

	if(edadInresada<18 || edadInresada>12   )//todas
	{
		alert("adolescentes");
	}



	//fin errores

	if( edadIngresada<13)
	{
		alert("no es adolescentes");
	}

	if(edadIngresada>17)
	{
		alert("no es adolescentes");
	}



	*/
}//FIN DE LA FUNCIÓN
