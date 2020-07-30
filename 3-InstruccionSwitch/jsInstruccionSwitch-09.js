function mostrar()
{
	var estacionIngresada =txtIdEstacion.value;
	var destinoIngresado= txtIdDestino.value;
	var precioDestino;
	var porcentaje;
	var porcentajeAumento;
	var descuento;
	var aumento;
	var descuentoTotal;
	var aumentoTotal;

	precioDestino = 15000;
	precioDestino = parseInt(precioDestino);

	descuento = porcentaje;
	descuento = parseInt(descuento);
	porcentaje = (precioDestino/100)* porcentaje;
	descuentoTotal = porcentaje - precioDestino;
	descuentoTotal= parseInt(descuentoTotal);

	porcentajeAumento = (precioDestino/100)* aumento;
	aumento = porcentajeAumento;
	aumento = parseInt(aumento);

	switch (estacionIngresada)
	{
		case "Invierno":
			switch(destinoIngresado)
			{
				case "Bariloche":
					aumento = 20;
					alert("Precio total en Invierno: $" + aumentoTotal);
						break;
				case "Mar del plata":
					descuento = 20;
					alert("Precio total en Invierno: $" + descuentoTotal);
						break;
				default:
					descuento = 10;
					alert("Precio total en Invierno: $" + descuentoTotal);
						break;		
			}
	}aumentoTotal = precioDestino + porcentajeAumento;
	aumentoTotal = parseInt(aumentoTotal);
//porcentaje = (precioDestino* descuento/100);
//descuentoTotal = porcentaje - precioDestino;
//aumentoTotal = precioDestino + porcentajeAumento;
//aumentoTotal = parseInt(aumentoTotal);
}//FIN DE LA FUNCIÓN