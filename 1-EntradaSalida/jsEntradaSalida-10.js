/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()

{
	/*Forlano Martina
	ercicio 03:
	se pide dos importes, y un porcentaje de descuento (todo con prompt)
	y se muestra el siguiente mensaje:
	"los productos cuestan $??? y $??? , sumados son $??? 
	,tienen un descuento de $??? pesos, el precio total con descuento es $??? 
	,el iva es de $??? y el precio final con IVA es $???"
	ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
	"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos,
	el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"*/

	var primerProductoIngresado;
	var segundoProductoIngresado;
	var suma;
	var porcentajeDescuentoIngresado;
	var precioTotalConDescuento;
	var iva;
	var precioFinalConIva;


	primerProductoIngresado = prompt("Ingrese el precio del primer producto");
	primerProductoIngresado = parseFloat(primerProductoIngresado);

	segundoProductoIngresado = prompt("Ingrese el precio del segundo producto");
	segundoProductoIngresado = parseFloat(segundoProductoIngresado);

	porcentajeDescuentoIngresado = prompt("Ingrese el porcentaje de descuento");
	porcentajeDescuentoIngresado = parseInt(porcentajeDescuentoIngresado);

	suma = primerProductoIngresado + segundoProductoIngresado;
 
	precioTotalConDescuento = suma * porcentajeDescuentoIngresado/100;

	iva = suma *0.21;

	precioFinalConIva = precioTotalConDescuento + iva;

	alert("los productos cuestan $" +primerProductoIngresado+" y "+segundoProductoIngresado+" sumados son $"+suma+" tienen un descuento de $"+precioTotalConDescuento+", el precio total con descuento es $"+precioTotalConDescuento+" el IVA es de $"+iva+", y el precio final con iva es $"+precioFinalConIva);
}

/*
{
	/*Forlano
	ercicio 02:
	se pide el anco y largo de un terreno ,necesitamos informar el prerimetro y la supreficie.
	mostrar el siguiente mensaje.
	"el terreno tiene ??? x ??? su perimetro total es de ??? y la superficie es de ???"

	var anchoIngresado;
	var largoIngresado;
	var perimetro;
	var superficie;

	anchoIngresado = prompt("Ingrese el perímetro del terreno");
	anchoIngresado = parseFloat(anchoIngresado);

	largoIngresado = prompt("Ingrese la superficie del terreno");
	largoIngresado = parseFloat(largoIngresado);

	perimetro = 2*(largoIngresado + anchoIngresado);
	perimetro = parseFloat(perimetro);

	superficie = perimetro*2;

	alert ("el terreno tiene "+largoIngresado + "x"+" su perimetro total es de "+perimetro+ " y la superficie es de "+superficie);
//}


/*
	/*
	Forlano
	ejercicio 01:
	se ingresa nombre del producto , el importe y el porcentaje de aumento a aplicar (por prompt).
	y semuestra el siguient mensaje(por alert):
	"el producto XXXX cuesta $xxxx sin aumento, tiene aumento de $XXXX y el precio final es: $xxxx, gracias por su compra"*/

	/*r productoIngresado;
	var precioIngresado;
	var porcentajeIngresado;
	var porcentajeAumento;
	var precioFinal;

	productoIngresado = prompt("Ingrese nombre del producto");

	precioIngresado = prompt("Ingrese precio");
	precioIngresado = parseInt (precioIngresado);

	porcentajeIngresado = prompt ("Ingrese porcentaje de aumento");
	porcentajeIngresado = parseInt (porcentajeIngresado);

	porcentajeAumento =(precioIngresado * porcentajeIngresado)/100;
	porcentajeAumento = parseInt (porcentajeAumento);

	precioFinal = precioIngresado + porcentajeAumento;

	alert("el producto " + productoIngresado + " cuesta $" + precioIngresado + " sin aumento, tiene un aumento de $" + porcentajeIngresado + " el precio final es: $" + precioFinal + ", gracias por su compra");
}


/*{
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
}*/
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