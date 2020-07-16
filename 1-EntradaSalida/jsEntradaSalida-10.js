/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var resultado;
	var porcentaje;

	porcentaje = prompt ("ingrese porcentaje");
	porcentaje = parseInt (porcentaje);
	
	importe = txtIdImporte.value;
	importe = parseInt (importe);

	resultado = (importe * porcentaje/100);
	txtIdResultado.value = resultado;
}
