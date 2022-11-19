import React from "react";
import { useHistory } from "react-router-dom";



export function Paginate({allVideogames, videogamesPerPage, setPagination, currentPage, setCurrentPage}) {

	const pageNumber = []

	for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){
		pageNumber.push(i)
	}

	const handlePrev = () => {
		if(currentPage === 1) setCurrentPage(1)
		else setCurrentPage(currentPage-1)
	}

	const handleNext = () => {
		if(currentPage === pageNumber[pageNumber.length-1]) setCurrentPage(currentPage)
		else setCurrentPage(currentPage+1)
	}

	return(
		<div>
			<button onClick={() => handlePrev()}>prev</button>
				<div>
				{allVideogames < 15 ? 
				<div> {setPagination(1)}</div> : 
				pageNumber && pageNumber.map(n =>(
					<button onClick={(event) => setPagination(n)} >{n}</button>
				))
				}
				</div>
			<button onClick={() => handleNext()}>next</button>
		</div>
	)
}