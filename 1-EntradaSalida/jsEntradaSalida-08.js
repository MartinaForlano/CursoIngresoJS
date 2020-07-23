/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var primerNumero;
	var segundoNumero;
	var dividendo;
	var divisor;
	var resto;

	//primerNumero = txtIdNumeroUno.value;
	primerNumero = parseInt (primerNumero);

	//segundoNumero = txtIdNumeroDos.value;
	segundoNumero = parseInt(segundoNumero);

	dividendo = txtIdNumeroDividendo.value;
	dividendo = parseInt (dividendo);

	divisor = txtIdNumeroDivisor.value;
	divisor = parseInt (divisor);

	resto = dividendo % divisor;

	alert("El resto es de: " + resto);

	/*testing
	var dato;

	dato=parseInt(3);//ok
	dato=parseInt("z999");//NaN
	dato=parseInt("");//NaN
	dato=parseInt("666z");// solo 666
	dato=parseInt("66z7");//solo 66
	dato=parseInt("zz");//NaN
	dato=parseInt("3");//3
	dato=parseInt(lalala);//error
	*/
}
