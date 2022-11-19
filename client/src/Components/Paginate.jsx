import React from "react";

export function Paginate({allVideogames, videogamesPerPage, setPagination, currentPage, setCurrentPage}) {//all videogames = videogames.length => el estado videogames!

	const pageNumber = []  //se declara array vacio para guardar los numeros de pagina

	for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){    //se recorre el array empezando por la hoja uno mientras que i sea menor a allVideogames/videogamesPerPage va a seguir iterando
		pageNumber.push(i)													//allVideogames es donde estan todos los videojuegos y videojuegos es la cantidad de videojuegos por hoja osea 15
	}																		//por cada iteracion va pusheando al array de  pageNumber cada pagina que sea ppsible crear

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
			<button onClick={() => handlePrev()} disabled={allVideogames < 15}>prev</button>
				<div>
					{allVideogames < 15 ? 
					<div key='pagination'> {setPagination(1)}</div> : 
					pageNumber && pageNumber.map(n =>(
						<button key={n} onClick={(event) => setPagination(n)} >{n}</button>
					))
					}
				</div>
			<button onClick={() => handleNext()} disabled={allVideogames < 15}>next</button>
		</div>
	)
}