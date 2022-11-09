import React from "react";

export default function Home (){
	return (
		<div>
			<h1>Home</h1>
			<select>
				<option Value="videojuego">existente o agregado?</option>
				<option Value="genre">genre</option>
			</select>
			<select>
				<option Value="ascendente">orden ascendente</option>
				<option Value="descendente">orden descendente</option>
			</select>
			{/* falta agregar el paginado
			falta hacer bien los botones de filtros y hacerlos digamos solo estan ahi visualmente x ahora */}
		</div>
	)
}