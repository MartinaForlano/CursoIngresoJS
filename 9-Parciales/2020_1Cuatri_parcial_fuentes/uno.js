	/*
	Debemos realizar la carga de 5(cinco) productos de prevención de contagio, 
	de cada una debo obtener los siguientes datos: 
	el tipo (validar "barbijo" , "jabón" o "alcohol") , 
	el precio (validar entre 100 y 300),
	la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
	la Marca y el fabricante. 
	Se debe Informar al usuario lo siguiente:

	a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	b) Del tipo con mas unidades, el promedio por compra 
	c) Cuántas unidades de jabones hay en total 
	*/
	function mostrar()
	{
		var productoIngresado;
		var barbijo;
		var jabon;
		var alcohol;
		var precioIngresado;
		var cantidadDeUnidadesIngresadas;
		var marcaIngresada;
		var fabricanteIngresado;
		var respuesta;
		var contadorAlcohol;
		var alcoholMasBarato;
		var banderaAlcohol;
		var promedioDeCompra;
		var contadorJabon;
		var contadorBarbijo;
		var acumuladorAlcohol;
		var acumuladorBarbijo;
		var acumuladorJabon;
		var contador;
		var tipoConMasUnidades;

		respuesta='si';
		contador=0;
		contadorAlcohol=0;
		contadorBarbijo=0;
		contadorJabon=0;
		banderaAlcohol=0;
	 	acumuladorAlcohol=0;
		acumuladorBarbijo=0;
		acumuladorJabon=0;

		while(respuesta=='si')
		{	
			productoIngresado=prompt("Ingrese  el producto (barbijo/jabon/alcohol)");																	//el tipo (validar "barbijo" , "jabón" o "alcohol") , 
			while((isNaN(productoIngresado)==false) || productoIngresado!= 'barbijo' && productoIngresado!='jabon' && productoIngresado!='alcohol')
			{
				productoIngresado=prompt("Error. Ingrese  el producto (barbijo/jabon/alcohol)");
			}
			precioIngresado=prompt("Ingrese el precio del producto.");
			precioIngresado=parseInt(precioIngresado);
			while((isNaN(precioIngresado)==true) || precioIngresado<100 || precioIngresado>300)															//el precio (validar entre 100 y 300),
			{
				precioIngresado=prompt("Error. Ingrese el precio del producto.");
				precioIngresado=parseInt(precioIngresado);
			}
			cantidadDeUnidadesIngresadas=prompt("Ingrese la cantidad de unidades que necesite.")
			cantidadDeUnidadesIngresadas=parseInt(cantidadDeUnidadesIngresadas);
			while((isNaN(cantidadDeUnidadesIngresadas)==true) || cantidadDeUnidadesIngresadas<0 || cantidadDeUnidadesIngresadas>1000) 					//la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades), 
			{
				cantidadDeUnidadesIngresadas=prompt("Error. Ingrese la cantidad de unidades que necesite.")
				cantidadDeUnidadesIngresadas=parseInt(cantidadDeUnidadesIngresadas);
			}
			marcaIngresada=prompt("Ingrese la marca del producto");
			while(isNaN(marcaIngresada)==false)
			{
				marcaIngresada=prompt("La marca no puede contener números. Vuelva a ingresar una marca.");												//la Marca
			}	
			fabricanteIngresado=prompt("Ingrese el nombre del fabricante.");
			while(isNaN(fabricanteIngresado)==false)
			{
				fabricanteIngresado=prompt("El nombre no puede incluir números. Reingrese el nombre del fabricante.");									// y el fabricante.
			}
			if(productoIngresado=='alcohol')
			{	
				if(banderaAlcohol==0)
				{
					alcoholMasBarato=precioIngresado;
					banderaAlcohol=1;
				}else
				{
					if(precioIngresado==alcoholMasBarato)
					{
						alcoholMasBarato=precioIngresado;
						fabricanteIngresado;
					}else
					{
						if(precioIngresado<alcoholMasBarato)
						{																											//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
							alcoholMasBarato=precioIngresado;
							fabricanteIngresado;
						}
					}
				}
				switch(productoIngresado)
				{

					case 'alcohol':
						contadorAlcohol++;
						acumuladorAlcohol=acumuladorAlcohol+cantidadDeUnidadesIngresadas;
						tipoConMasUnidades='alcohol';
							break;
					case 'barbijo':
						contadorBarbijo++;
						acumuladorBarbijo=acumuladorBarbijo+cantidadDeUnidadesIngresadas;
						tipoConMasUnidades='barbijo';
							break;
					case 'jabon': 																									//c) Cuántas unidades de jabones hay en total     
						contadorJabon++;
						acumuladorJabon=acumuladorJabon+cantidadDeUnidadesIngresadas;
						tipoConMasUnidades='jabon';
							break;
				}
				contador++;
			}
			if((acumuladorAlcohol>acumuladorJabon) && (acumuladorAlcohol>acumuladorBarbijo))
			{																													//b) Del tipo con mas unidades, el promedio por compra 
				promedioDeCompra=acumuladorAlcohol/contadorAlcohol;
			}
			else
			{
				if((acumuladorJabon>acumuladorAlcohol) && (acumuladorJabon>acumuladorBarbijo))
				{
					promedioDeCompra=acumuladorJabon/contadorJabon;
				}else
					{
						promedioDeCompra=acumuladorBarbijo/contadorBarbijo;
					}
			}


				if(productoIngresado=='alcohol')
				{
					document.write("El alcohol más barato sale: "+alcoholMasBarato+"<br>");
					document.write("En total ha pedido: "+acumuladorAlcohol+" alcoholes <br>");
				}
				else
				{
					document.write("No ha ingresado alcoholes.<br>");
				}


				if(productoIngresado=='jabon')
				{
					document.write("En total ha pedido: "+acumuladorJabon+" jabones <br>");
				}else
				{
					document.write("No ha pedido jabones. <br>");
				}
				
			respuesta=prompt("desea continuar ingresando?");													
			document.write("El fabricante de este producto es: "+fabricanteIngresado+"<br>");
			document.write("El tipo con más unidades que hay pedido es: "+tipoConMasUnidades+" y el promedio de compra es: "+promedioDeCompra+"<br>");
			

		}


	}
















































	/*

function mostrar()
{
	var contador;
	var tipo;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var banderaPrimerAlcohol;
	var minimoAlcoholPrecio;
	var minimoAlcoholPrecioFabricante;
	var minimoAlcoholPrecioCantidad;
	var contadorBarbijo;
	var contadorJabon;
	var contadorAlcohol;
	var acumuladorBarbijo;
	var acumuladorJabon;
	var acumuladorAlcohol;
	var promedioDeCompra;
	var tipoConMasUnidades;

	acumuladorBarbijo=0;
	acumuladorJabon=0;
	acumuladorAlcohol=0;
	contadorAlcohol=0;
	contadorJabon=0;
	contadorBarbijo=0;

	contador = 0;
	banderaPrimerAlcohol ="no paso";
	while(contador<5)
	{
		tipo= prompt("ingrese tipo");
		while(tipo!="barbijo" && tipo!= "jabón" && tipo!="alcohol")
		{
			tipo= prompt("error, reingrese el tipo");
		}
		precio= prompt("ingrese precio");
		precio= parseInt(precio);
		while(precio<100 || precio>300)
		{
			precio= prompt(" error, reingrese precio");
			precio= parseInt(precio);
		}
		cantidadUnidades= prompt("ingrese cantidad de unidades");
		cantidadUnidades= parseInt(cantidadUnidades);
		while(cantidadUnidades<0 || cantidadUnidades>1000)
		{
			cantidadUnidades= prompt(" error, reingrese cantidad de unidades");
			cantidadUnidades= parseInt(cantidadUnidades);
		}


		marca= prompt("ingrese marca");
		fabricante= prompt("ingrese fabricante");
		if (tipo== "alcohol")
		{
			if(banderaPrimerAlcohol=="no paso")
			{
				banderaPrimerAlcohol="ya paso por aca";
				minimoAlcoholPrecio= precio;
				minimoAlcoholPrecioCantidad = cantidadUnidades;
				minimoAlcoholPrecioFabricante = fabricante;
			}else
			{
				if(precio<minimoAlcoholPrecio)
				{
					minimoAlcoholPrecio= precio;
					minimoAlcoholPrecioCantidad = cantidadUnidades;
					minimoAlcoholPrecioFabricante = fabricante;
				}
			}
		}
		switch(tipo)
		{
			case "barbijo":
				contadorBarbijo++;
				acumuladorBarbijo = acumuladorBarbijo+cantidadUnidades;
					break;
			case "jabon"://c
				contadorJabon++;
				acumuladorJabon= acumuladorJabon+cantidadUnidades;
				break;
			case "alcohol":
				contadorAlcohol++;
				acumuladorAlcohol= acumuladorAlcohol+cantidadUnidades;
				break;
		}
		contador= contador+1;
	}

	//sacar el que tiene mas unidades

	if(acumuladorAlcohol>acumuladorJabon && acumuladorAlcohol>acumuladorBarbijo)
	{
		//alcohol es el q tiene mas
		tipoConMasUnidades="alcohol";
		promedioDeCompra= acumuladorAlcohol/contadorAlcohol;

	}
	else
	{
		if(acumuladorJabon>acumuladorBarbijo)
		{
			//acumulador de jabon es el mayor
			tipoConMasUnidades="jabon";
			promedioDeCompra =acumuladorJabon/contadorJabon;
		}else
		{
			//acumulador de barbijo mayor
			tipoConMasUnidades= "barbijo";
			promedioDeCompra = acumuladorBarbijo/contadorBarbijo;
		}
	}


//mostrar los datos
document.write("el alcohol mas barato es: " +minimoAlcoholPrecio+ "<br>");
document.write("Usted compró: " +contadorAlcohol+ " alcoholes"+"<br>");
document.write("el fabricante es: " + fabricante+"<br>"); 
document.write("Ha comprado más cantida de: " +tipoConMasUnidades+ "y el promedio por compra es de: "+promedioDeCompra+"<br>");
document.write("En total hay :"+contadorJabon + " jabones");

}

	/*a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
	b) Del tipo con mas unidades, el promedio por compra 
	c) Cuántas unidades de jabones hay en total */