/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var primerNumero;
	var segundoNumero;
	var suma;

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt (primerNumero);

	segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero + segundoNumero;

	alert("La suma es de: " +suma);
}

function restar()
{
	var primerNumero;
	var segundoNumero;
	var resta;

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt (primerNumero);

	segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	resta = primerNumero - segundoNumero;

	alert("La resta es de: " +resta);
}

function multiplicar()
{ 
	var primerNumero;
	var segundoNumero;
	var multiplicación;

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt (primerNumero);

	segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	multiplicación = primerNumero * segundoNumero;

	alert("La multiplicación es de: " +multiplicación);
}

function dividir()
{
	var primerNumero;
	var segundoNumero;
	var división;

	primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt (primerNumero);

	segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	división = primerNumero / segundoNumero;

	alert("La división es de: " +división);
}

