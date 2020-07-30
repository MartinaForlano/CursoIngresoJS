//Forlano, TP Ferrete Iluminación.
/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
	//Versión Switch (sin terminar)

	var precioEnCantidad;
 	var cantidadLamparas;
 	var precioUnitario;
 	var descuentoLamparitas;
 	var precioFinal;
 	var marcaLamparitas;
 	var iibb;


 	cantidadLamparas = txtIdCantidad.value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marcaLamparitas = Marca.value;

 	precioUnitario = 35;
 	precioEnCantidad = precioUnitario * cantidadLamparas;

	switch(marcaLamparitas)
	{
		case "ArgentinaLuz":
			switch(cantidadLamparas)
			{		
				case 5:
					descuentoLamparitas = 40;
						break;
				case 4:
						descuentoLamparitas = 25;
					break;
				case 3:
					descuentoLamparitas = 15;
						break;
			}
		case "FelipeLamparas":
			switch(cantidadLamparas)
			{
				case 4:
					descuentoLamparitas = 25;
						break;
				case 3:
					descuentoLamparitas = 10;
						break;
			}

		default:
			if(cantidadLamparas>5)
			{
				descuentoLamparitas = 50;
			}
				break;
	}
	precioFinal = (precioEnCantidad * descuentoLamparitas)/100;
	txtIdprecioDescuento.value=precioFinal;

		if(precioFinal>120)
		{
			iibb= (precioFinal * precioEnCantidad*10/100);
			precioFinal = iibb + precioFinal;

			alert("Usted pago "+ precioFinal+" de IIBB.”, siendo "+ iibb+" el impuesto que se pagó.")
		}

	}


 	/* VERSIÓN IF ELSE
 	var precioEnCantidad;
 	var cantidadLamparas;
 	var precioUnitario;
 	var descuentoLamparitas;
 	var precioFinal;
 	var marcaLamparitas;
 	var iibb;


 	cantidadLamparas = txtIdCantidad.value;
 	cantidadLamparas = parseInt(cantidadLamparas);

 	marcaLamparitas = Marca.value;

 	precioUnitario = 35;
 	precioEnCantidad = precioUnitario * cantidadLamparas;

 	if(cantidadLamparas>5)
 	{
 		descuentoLamparitas = 50;
 	}else
 	{
 		if(cantidadLamparas == 5)
 		{
 			if(marcaLamparitas == "ArgentinaLuz")
 			{
		 		descuentoLamparitas= 40; 		
 			}else
 			{
		 		descuentoLamparitas= 30;
 			}
 		}else
 		{
 			if(cantidadLamparas == 4)
 			{
	 			if(marcaLamparitas == "ArgentinaLuz" || marcaLamparitas == "FelipeLamparas")
	 			{
			 		descuentoLamparitas= 25;
	 			}else
	 			{
			 		descuentoLamparitas = 20;
	 		}else
	 		{
	 			if(cantidadLamparas==3)
	 			{
	 				if(marcaLamparitas=="ArgentinaLuz")
 					{
		 				descuentoLamparitas = 15;
 					}else
 					{
 						if(marcaLamparitas == "FelipeLamparas")
 						{
			 				descuentoLamparitas = 10;
 						}else
 						{
			 				descuentoLamparitas = 5;
 						}
 				}	
	 		}
 		}	
 	}
precioFinal = (precioEnCantidad * descuentoLamparitas)/100;
txtIdprecioDescuento.value=precioFinal;

	if(precioFinal>120)
	{
		iibb= (precioFinal * precioEnCantidad*10/100);
		precioFinal = iibb + precioFinal;

		alert("Usted pago "+ precioFinal+" de IIBB.”, siendo "+ iibb+" el impuesto que se pagó.")
	}
	*/
//}
