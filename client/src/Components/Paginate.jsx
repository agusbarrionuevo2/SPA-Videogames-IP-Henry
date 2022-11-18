import React from "react";



export function Paginate({allVideogames, videogamesPerPage, setPagination, currentPage}) {

	const pageNumber = []

	for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
		pageNumber.push(i)
	}

	return(
		<div>
			{allVideogames < 15 ? 
			<div> {setPagination(1)}</div> : 
			pageNumber && pageNumber.map(n =>(
				<button onClick={() => setPagination(n)}>{n}</button>
			))
			}
		</div>
	)
}