/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
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

