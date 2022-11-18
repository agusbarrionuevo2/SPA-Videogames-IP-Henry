import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { VideogameCard } from "./VideogameCard";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import {Paginate} from './Paginate'
import {filterByCreation, filterByGenre, orderByName, orderByRating, getGenres, getVideogames } from "../redux/actions/actions"


export default function Home (){
	
	const dispatch = useDispatch()
	
	const genres = useSelector(state => state.genres)
	const videogames = useSelector(state => state.videogames)

	const [alfabetical, setAlfabetical] = useState('')
	
	const [rating, setRating] = useState('')
//Paginado
	const [currentPage, setCurrentPage ] = useState(1);
	const [videogamesPerPage, setVideogamesPerPage ] = useState(15);
	const ultimo = currentPage * videogamesPerPage
	const primero = ultimo - videogamesPerPage
	const games = videogames.slice(primero, ultimo)

	const setPagination = (page) => {
		return setCurrentPage(page)
	}

	// const videogames = useSelector(state => state.videogames)


	useEffect(() =>{
		dispatch(getVideogames())
		dispatch(getGenres())
	 },[dispatch])

	//  const handleClick = (event) => {
	// 	event.preventDefault();
	// 	dispatch(getVideogames())
	// }

//FILTROS
	const handlerRating = (event) => {
		event.preventDefault()
		dispatch(orderByRating(event.target.value))
		setRating(`Order ${event.target.value}`)
	}

	const handlerName = (event) => {
		event.preventDefault()
		dispatch(orderByName(event.target.value))
		setAlfabetical(`Order ${event.target.value}`)
	}

	const handlerGenre = (event) => {
		event.preventDefault()
		dispatch(filterByGenre(event.target.value))
	}

	const handleCreatedAt = (event) => {
		event.preventDefault()
		dispatch(filterByCreation(event.target.value))
	}

	return (
			<div>
				<h1>Home</h1>
				<NavBar/>
				<SearchBar/>
					<div>
						{/* <button onClick={(event) => handleClick(event)}>Load videogames</button> */}
						<form>
							<label>Filter by Name: </label>
								<select name="FilterByName" onChange={(event) => handlerName(event)}>
									<option defaultValue='ALL'></option>
									<optgroup label="By Name">
										<option value='A-Z'>A-Z</option>
										<option value='Z-A'>Z-A</option>
									</optgroup>
								</select>
							<label> Rating: </label>
								<select name="FilterByRating" onChange={(event) => handlerRating(event)}>
									<option defaultValue='ALL'></option>
									<optgroup label="By Rating">
										<option value='0-5'>0-5</option>
										<option value='5-0'>5-0</option>
									</optgroup>
								</select>
							<label>Genre: </label>
								<select onChange={(event) => handlerGenre(event)}>
									<option defaultValue='ALL'></option>
									{ genres && genres.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))}
								</select>
							<label>Created At:</label>
								<select onChange={(event) => handleCreatedAt(event)}>
									<option defaultValue='ALL'></option>
									<option value='db'>Database</option>
									<option value='api'>API</option>
								</select>
							{/* <button onClick={cleanFilters()}>Clear Filters</button> */}
						</form>
					</div>
			<div>
				{games.map(v =>  <VideogameCard
					id={v.id}
					name={v.name}
					genre={v.genre || (v.Genres && v.Genres.map(g => g.name))}
					image= {v.image}
					rating = {v.rating}
				/>)}
				<div>
					<Paginate
					videogamesPerPage={videogamesPerPage}
					allVideogames={videogames.length}
					setPagination={setPagination}
					currentPage={currentPage}
					/>
				</div>
			</div>
		</div>
	)
}