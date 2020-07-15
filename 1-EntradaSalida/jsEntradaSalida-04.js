/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var nombreIngresado;

	nombreIngresado=txtIdNombre.value;
	nombreIngresado = prompt ("Ingrese su nombre", "nombre");
	alert(nombreIngresado);
}

