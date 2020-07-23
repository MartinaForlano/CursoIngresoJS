function mostrar()
{
	var notaRandom;

	notaRandom = Math.floor(Math.random() * 10) + 1;
	notaRandom = parseInt(notaRandom);

	if(notaRandom<5)
	{
		console.log("Su nota es: " + notaRandom + " vamos, la proxima se puede");
	}
	if(notaRandom>5 && notaRandom<8)
	{
		console.log("Su nota es: " +notaRandom + " APROBÓ");
	}
	else 
	{
		if(notaRandom>8)
			{
				console.log("Su nota es: " +notaRandom+ " EXCELENTE");
			}
	}
}//FIN DE LA FUNCIÓN