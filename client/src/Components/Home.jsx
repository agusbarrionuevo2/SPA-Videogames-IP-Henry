import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { VideogameCard } from "./VideogameCard";
import { SearchBar } from "./SearchBar";
import {Paginate} from './Paginate'
import {filterByCreation, filterByGenre, orderByName, orderByRating, getGenres, getVideogames, cleanSearch } from "../redux/actions/actions"
import './style/Home.css'

export default function Home (){
	
	const dispatch = useDispatch()
	
	const genres = useSelector(state => state.genres)
	const videogames = useSelector(state => state.videogames)

	const [alfabetical, setAlfabetical] = useState('')
	const [rating, setRating] = useState('')

	const [currentPage, setCurrentPage ] = useState(1);
	const videogamesPerPage = 15
	const ultimo = currentPage * videogamesPerPage
	const primero = ultimo - videogamesPerPage
	const games = videogames.slice(primero, ultimo)

	const setPagination = (page) => {
		return setCurrentPage(page)
	}

	useEffect(() =>{
		dispatch(getVideogames())
		dispatch(getGenres())
	 },[dispatch])

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

	const cleanFilters = () => {
		dispatch(cleanSearch())
		dispatch(getVideogames())
		dispatch(getGenres())
	}

	return (
			<div className="home-container">
				<h1>Home</h1>
				<SearchBar/>
					<div className="filters-container">
							<label>Filter by Name: </label>
								<select key='selectFilterName' name="FilterByName" onChange={(event) => handlerName(event)}>
									<option key='ALLBYNAME'defaultValue='ALL'></option>
									<optgroup key='nameLabel' label="By Name">
										<option key='A-Z' value='A-Z'>A-Z</option>
										<option key='Z-A' value='Z-A'>Z-A</option>
									</optgroup>
								</select>
							<label> Rating: </label>
								<select  key='selectFilterRating' name="FilterByRating" onChange={(event) => handlerRating(event)}>
									<option key='ALLRATING' defaultValue='ALL'></option>
									<optgroup key='ratingLabel' label="By Rating">
										<option key='0-5' value='0-5'>0-5</option>
										<option key='5-0' value='5-0'>5-0</option>
									</optgroup>
								</select>
							<label>Genre: </label>
								<select  key='selectFilterGenre' onChange={(event) => handlerGenre(event)}>
									<option key='ALLGENRE' defaultValue='ALL'></option>
									{ genres && genres.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))}
								</select>
							<label>Created At:</label>
								<select  key='selectFilterCreation' onChange={(event) => handleCreatedAt(event)}>
									<option key='ALLCREATION' defaultValue='ALL'></option>
									<option key='db' value='db'>Database</option>
									<option key='api' value='api'>API</option>
								</select>
							 <button onClick={() => cleanFilters()}>Clear Filters</button> 
					</div>
				<div className="card-layout">
					{games.map(v =>  <VideogameCard
						key={v.id}
						id={v.id}
						name={v.name}
						genre={v.genre || (v.Genres && v.Genres.map(g => g.name))}
						image= {v.image}
						rating= {v.rating}
					/>)}
				</div>
					<div>
						<Paginate
						videogamesPerPage={videogamesPerPage}
						allVideogames={videogames.length}
						setPagination={setPagination}
						currentPage={currentPage}
						setCurrentPage= {setCurrentPage}
						/>
					</div>
			</div>
	)
}





//pokemon.types.map(t => t.name + ', ')