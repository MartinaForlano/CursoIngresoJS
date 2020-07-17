/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	

	var nombre;
	var edad;

	nombre = txtIdNombre.value;

	edad = txtIdEdad.value;

	alert ("Su nombre es: " + nombre + " y tiene: " + edad + " años");

	/*
	var nombreIngresado;
	var edadIngresada;
	//entrada
	edadIngresada=33;	

	nombreIngresado=prompt("ingrese su nombre");

	edadIngresada=txtIdEdad.value;
	edadIngresada=document.getElementById('txtIdEdad').value;


	//salida
	alert(nombreIngresado);
	alert("mensaje");
	alert("mensaje "+ nombreIngresado);

	txtIdEdad.value="texto";
	txtIdEdad.value=33;
	txtIdEdad.value=edadIngresada;
	document.getElementById('txtIdEdad').value=edadIngresada;

	*/
}

