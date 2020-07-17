/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo;
	var ancho;
	var perímetro;
	var cantidadAlambre;

	largo = txtIdLargo.value;
	largo = parseFloat(largo);

	ancho = txtIdAncho.value;
	ancho = parseFloat(ancho);

	perímetro = ancho + largo *2;

	cantidadAlambre = perímetro *3;

	alert("Cantidad de alambre a utilizar: " + cantidadAlambre);
}

function Circulo () 
{
	var radio;
	var cantidadAlambre;

	radio = txtIdRadio.value;
	radio = parseFloat(radio);

	cantidadAlambre = radio * 3.14;

	alert ("Alambre a comprar: " +cantidadAlambre);
}

function Materiales () 
{
	var largo;
	var ancho;
	var area;
	var bolsasDeCemento;
	var bolsasDeCal;

	largo = txtIdLargo.value;
	largo = parseFloat(largo);

	ancho = txtIdAncho.value;
	ancho = parseFloat(ancho);

	//para sacar los m^2 multiplico ancho*largo
	area = ancho * largo;

	bolsasDeCemento = area*2;

	bolsasDeCal = area*3;

	alert("Para hacer el contrapiso necesita " + bolsasDeCemento + " bolsas de cemento y " + bolsasDeCal + " bolsas de cal.");

}