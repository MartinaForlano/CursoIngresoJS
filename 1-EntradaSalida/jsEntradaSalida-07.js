/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	//tomamos el dato
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//parseInt devuelve el dato transformado
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	suma = (numeroUno + numeroDos);

	alert("La suma es de: " + suma);	
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resta;

	//tomamos el dato
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//parseInt devuelve el dato transformado
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	resta = (numeroUno - numeroDos);

	alert("La resta es de: " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicación;

	//tomamos el dato
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//parseInt devuelve el dato transformado
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	multiplicación = (numeroUno * numeroDos);

	alert("La multiplicación es de: " + multiplicación);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var división;

	//tomamos el dato
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	//parseInt devuelve el dato transformado
	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	división = (numeroUno / numeroDos);

	alert("La división es de: " + división);
}

