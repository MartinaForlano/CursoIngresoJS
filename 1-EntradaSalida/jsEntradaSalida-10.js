/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var importeConDescuento;
	var porcentaje;
	var resultado;


	importe = txtIdImporte.value;
	importe = parseInt (importe);

	porcentaje = prompt("ingrese porcentaje");
	porcentaje = parseInt(porcentaje);

	importeConDescuento = importe * porcentaje/100;

	resultado = importe - importeConDescuento;
	txtIdResultado.value = resultado;





}
/*
Ejercicio en clase:
Forlano Martina
Se pide un importe y un porcentaje descuento por prompt, y se muestra el importe con el descuento por alert con el mensaje 
" el importe es $ xxxx el total de descuento es $xxx y el precio final es $xxx, gracias por su compra"
*/
//function mostrarDescuento()
//{
	/*var importe;
	var porcentaje;
	var descuento;
	var precioFinal;

	importe = prompt("Ingrese su importe");
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese el porcentaje de descuento");
	porcentaje = parseInt(porcentaje);

	descuento = (importe * porcentaje/100);

	precioFinal = importe - descuento;

	alert ("El importe es de: $" + importe + " el total de descuento es de: $"+ descuento + " gracias por su compra.");*/
//}
