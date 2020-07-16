/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var aumentoImporte;
	var resultado;
	var porcentaje;

	porcentaje = prompt("Ingrese porcentaje");
	porcentaje = parseInt (porcentaje);

	sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);

	aumentoImporte = (sueldo*porcentaje/100);

	resultado = (sueldo + aumentoImporte);
	txtIdResultado.value = resultado;
}
