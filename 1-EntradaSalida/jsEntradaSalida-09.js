/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldo;
	var importeAumento;
	var porcentaje;
	var resultado;

	sueldo = txtIdSueldo.value;
	sueldo = parseInt (sueldo);

	importeAumento = sueldo * 10/100;

	resultado = importeAumento + sueldo;
	txtIdResultado.value = resultado;
}
