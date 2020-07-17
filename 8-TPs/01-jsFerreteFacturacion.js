/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;

	primerPrecio = txtIdPrecioUno.value;
	primerPrecio = parseInt (primerPrecio);

	segundoPrecio = txtIdPrecioDos.value;
	segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = txtIdPrecioTres.value;
	tercerPrecio = parseInt (tercerPrecio);

	suma = (primerPrecio + segundoPrecio + tercerPrecio);
	alert("La suma es de: " +suma);
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var promedio;

	primerPrecio = txtIdPrecioUno.value;
	primerPrecio = parseInt (primerPrecio);

	segundoPrecio = txtIdPrecioDos.value;
	segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = txtIdPrecioTres.value;
	tercerPrecio = parseInt (tercerPrecio);

	suma = (primerPrecio + segundoPrecio + tercerPrecio);

	promedio = suma/3;

	alert("El promedio es de: " + promedio);	
}

function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var suma;
	var iva;

	primerPrecio = txtIdPrecioUno.value;
	primerPrecio = parseInt (primerPrecio);

	segundoPrecio = txtIdPrecioDos.value;
	segundoPrecio = parseInt (segundoPrecio);

	tercerPrecio = txtIdPrecioTres.value;
	tercerPrecio = parseInt (tercerPrecio);

	suma = (primerPrecio + segundoPrecio + tercerPrecio);

	iva = (suma * 0.21) + suma;

	alert("El precio final con IVA es de: " + iva);
}