import React from "react";
import './style/Paginate.css'

export function Paginate({allVideogames, videogamesPerPage, setPagination, currentPage, setCurrentPage}) {//all videogames = videogames.length => el estado videogames!

	const pageNumber = []  //se declara array vacio para guardar los numeros de pagina

	for(let i = 1; i <= Math.ceil(allVideogames/videogamesPerPage); i++){    //se recorre el array empezando por la hoja uno mientras que i sea menor a allVideogames/videogamesPerPage va a seguir iterando
		pageNumber.push(i)													//allVideogames es donde estan todos los videojuegos y videojuegos es la cantidad de videojuegos por hoja osea 15
	}																		//por cada iteracion va pusheando al array de  pageNumber cada pagina que sea ppsible crear

	const handlePrev = () => { //prev
		if(currentPage === 1) setCurrentPage(1)  //si es la primer pag y apretas prev se va a poner devuelta la primer pag
		else setCurrentPage(currentPage-1)
	}

	const handleNext = () => { //next
		if(currentPage === pageNumber[pageNumber.length-1]) setCurrentPage(currentPage)  //si es la ultima pag y apretas next, no pasa a otra pag que no existe. se actualiza a la ultima devuelta
		else setCurrentPage(currentPage+1)
	}

	return(
		<div className="paginate-container">
			<div className='prev-next'>
				<button className="next-prev-btn" onClick={() => handlePrev()} disabled={allVideogames < 15}>prev</button>
			</div>
				<div className="pages">
					{allVideogames < 15 ? 
					<div key='pagination'> {setPagination(1)}</div> : 
					pageNumber && pageNumber.map(n =>(
						<div className='page'>
							<button className="page-btn"  key={n} onClick={(event) => setPagination(n)} >{n}</button>
						</div>
					))
					}
				</div>
				<div className='prev-next'>
					<button className="next-prev-btn" onClick={() => handleNext()} disabled={allVideogames < 15}>next</button>
				</div>
		</div>
	)
}