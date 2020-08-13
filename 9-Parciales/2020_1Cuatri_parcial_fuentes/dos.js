/* Forlano, Martina. 
	Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
	Tipo validad("arena";"cal";"cemento")
	Cantidad de bolsas,
	Precio por bolsa (más de cero),

	Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	a) El importe total a pagar , bruto sin descuento y...
	b) el importe total a pagar con descuento(solo si corresponde)
	d) Informar el tipo con mas cantidad de bolsas.
	f) El tipo mas caro
*/

function mostrar()
{

var productoIngresado;
var arena;
var cal;
var cemento;
var cantidadDeBolsas;
var precioPorBolsa;
var respuesta;
var descuento;
var precioConDescuento;
var contadorArena;
var contadorCal;
var contadorCemento;
var bolsasTotales;
var precioFinalArena;
var precioFinalCemento;
var precioFinalCal;
var precioFinalTotal;
var descuentoFinalTotal;
var primerBandera;
var productoConMayorCantidadDeBolsas;
var precioMasCaro;
var productoMasCaro;



respuesta='si';
contadorArena=0;
contadorCal=0;
contadorCemento=0;
primerBandera=0;


while(respuesta=='si')
{
  //validar los datos.
  productoIngresado=prompt("Ingrese el producto que quiere comprar (arena/cal/cemento)");
  while((isNaN(productoIngresado)==false) || productoIngresado!='cal'&& productoIngresado!='arena' && productoIngresado!='cemento')
  {
    productoIngresado=prompt("Error. Ingrese el producto que quiere comprar (arena/cal/cemento)");
  }


  cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas que necesita");
  cantidadDeBolsas=parseInt(cantidadDeBolsas);
  while(isNaN(cantidadDeBolsas)==true)
  {
    cantidadDeBolsas=prompt("Error. Ingrese la cantidad de bolsas que necesita");
  }

  precioPorBolsa=prompt("Ingrese el precio por bolsa");
  precioPorBolsa=parseInt(precioPorBolsa);
  while((isNaN(precioPorBolsa)==true) || precioPorBolsa<0)
  {
    precioPorBolsa=prompt("Error. Ingrese el precio por bolsa");
    precioPorBolsa=parseInt(precioPorBolsa);
  }


  switch(productoIngresado)
  {
    case 'arena':
      contadorArena=contadorArena+cantidadDeBolsas;
        break;
    case 'cal':
      contadorCal=contadorCal+cantidadDeBolsas;
        break;
    default:
    contadorCemento=contadorCemento+cantidadDeBolsa;
      break;
  }
  bolsasTotales=contadorCemento+contadorCal+contadorArena;

  precioFinalArena=contadorArena*precioPorBolsa;
  precioFinalCemento=contadorCemento*precioPorBolsa;
  precioFinalCal=contadorCal*precioPorBolsa;

  precioFinalTotal=precioFinalCemento+precioFinalCal+precioFinalArena;      // a) El importe total a pagar , bruto sin descuento

  if(bolsasTotales>10)                                                       //Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
  { 
    descuento=precioFinalTotal*15/100;
  }else
  { 
    if(bolsasTotales>30)                                                     //Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
    {
      descuento=precioFinalTotal*25/100;
    }
  }
  if(primerBandera=0)
  {
    if(precioMasCaro==precioPorBolsa)
    {
      precioPorBolsa=precioMasCaro;
      productoIngresado=productoMasCaro;
      primerBandera=1;
    }else
    {
      if(precioPorBolsa>precioMasCaro)
      {
        precioPorBolsa=precioMasCaro;
        productoIngresado=productoMasCaro;
      }else
      {
        if(precioMasCaro<precioPorBolsa)
        {
          precioPorBolsa=precioMasCaro;
          productoIngresado=productoMasCaro;
        }
      }
    }
  
  }
  descuentoFinalTotal=precioFinalTotal-descuento;                             //  b) el importe total a pagar con descuento(solo si corresponde)
  respuesta=prompt("quiere ingresar otro producto?");








if(cantidadDeBolsas<10)
{
  document.write("No hay descuento");
}else
{
  if(cantidadDeBolsas>10)
  {
    document.write("Tenes un descuento del 15%, el precio final es de: "+descuentoFinalTotal+ "<br>");
  }else
  {
    if(cantidadDeBolsas>30)
    {
      document.write("Tenes un descuento del 25%, el precio final es de: "+descuentoFinalTotal+"<br>");
    }
  }
}


document.write("El precio bruto sin descuento es: "+precioFinalTotal+"<br>");
document.write("producto más caro es: "+productoMasCaro+"<br>");
document.write("El tipo con más cantidad de bolsas es: "+productoConMayorCantidadDeBolsas+"<br>");


}

}



























































/*
function mostrar()
{
  var respuesta;
  var precioPorBolsa;
  var productoIngresado;
  var cantidadDeBolsas;
  var contadorArena;
  var contadorCal;
  var contadorCemento;
  var bolsasTotales;
  var precioFinalArena;
  var precioFinalCemento;
  var precioFinalCal;
  var precioFinalBruto;
  var precioTotalConDescuento;
  var primerBandera;
  var mayorCantidadDeBolsas;

  contadorCemento=0;
  contadorCal=0;
  contadorArena=0;
  respuesta='si';
  cantidadDeBolsas=parseInt(cantidadDeBolsas); 
  primerBandera="es el primero";
  mayorCantidadDeBolsas=0;   


 while(respuesta=='si')
  {
  	productoIngresado=prompt("Ingrese un producto");
  	while(productoIngresado!="arena" && productoIngresado!="cal" && productoIngresado!="cemento")
  	{
  		productoIngresado=prompt("Error, vuelva a ingresar un producto.");	
  	} 

  	cantidadDeBolsas=prompt("Ingrese la cantidad de bolsas que desea comprar");
  	cantidadDeBolsas= parseInt(cantidadDeBolsas);

  	while(cantidadDeBolsas<0)
  	{
  		cantidadDeBolsas=prompt("error, ingrese una cantidad valida");	
  	} 

  	precioPorBolsa=prompt("Ingrese el precio unitario");
  	precioPorBolsa=parseInt(precioPorBolsa); 

  	while(precioPorBolsa<0)
  	{
  		precioPorBolsa=prompt("error, ingrese un precio válido");
  		precioPorBolsa=parseInt(precioPorBolsa);
  	}
  	switch(productoIngresado)
  	{
  		case "arena":
  			contadorArena=contadorArena + cantidadDeBolsas;
  				break;

  		case "cal":
  			contadorCal=contadorCal + cantidadDeBolsas;
  				break;
  		default:
  			contadorCemento=contadorCemento + cantidadDeBolsas;
  				break;
  	}
  	bolsasTotales= contadorCemento+contadorCal+ contadorArena;

  	//precio final sin descuento

  	precioFinalArena= contadorArena*precioPorBolsa;
  	precioFinalCal= contadorCal * precioPorBolsa;
  	precioFinalCemento = contadorCemento * precioPorBolsa;

  	//precio final total

  	precioFinalBruto= precioFinalArena+ precioFinalCemento + precioFinalCal;

  	if(bolsasTotales>10)
  	{
 		descuento=precioFinalBruto * 15/100;
 		precioTotalConDescuento= precioFinalBruto - descuento;
 		alert("El precio total con descuento es: "+precioTotalConDescuento);
  	}else
  	{
  		if(bolsasTotales>30)
  		{
  			descuento=precioFinalBruto*25/100;
  			precioTotalConDescuento=precioFinalBruto-descuento;
  			alert("El precio total con descuento es:"+precioTotalConDescuento);
  		}else
  		{
  			precioTotalConDescuento= precioFinalBruto;
  			alert("El precio total es: "+precioTotalConDescuento);
  		}

  		if(primerBandera=="es el primero")
  		{
  			cantidadDeBolsas= mayorCantidadDeBolsas;
  			primerBandera="ya pasó";
  		}else
  		{
  			if(cantidadDeBolsas>mayorCantidadDeBolsas)
  			{
  				cantidadDeBolsas= mayorCantidadDeBolsas;
  			}
  		}
  	}

  	//alert("El tipo más caro es: "+)
  	//alert("El tipo con más cantidad de bolsas es: "+bolsasTotales);
  	respuesta= prompt("Desea ingresar otro producto?");
  }
document.write("El tipo con más cantidad de bolsas es: "+cantidadDeBolsas);

}


/*
	
	
	d) Informar el tipo con mas cantidad de bolsas.
	f) El tipo mas caro
*/