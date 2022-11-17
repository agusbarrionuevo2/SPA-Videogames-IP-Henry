import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByGenre, filterByName, filterByRating, getGenres, getVideogames } from "../redux/actions/actions"
import { useState } from 'react'



export function FilterBar(){

	const dispatch = useDispatch()

	const [alfabetical, setAlfabetical] = useState('')

	const [rating, setRating] = useState('')

	// const videogames = useSelector(state => state.videogames)
	const genres = useSelector(state => state.genres)

	useEffect(()=> {
		dispatch(getVideogames())
		dispatch(getGenres())
	},[dispatch])

	const handleClick = (event) => {
		event.preventDefault();
		dispatch(getVideogames())
	}


	const handlerRating = (event) => {
		event.preventDefault()
		dispatch(filterByRating(event.target.value))
		setRating(`Order ${event.target.value}`)
	}

	const handlerName = (event) => {
		event.preventDefault()
		dispatch(filterByName(event.target.value))
		setAlfabetical(`Order ${event.target.value}`)
	}

	const handlerGenre = (event) => {
		event.preventDefault()
		dispatch(filterByGenre(event.target.value))
	}

	return (
		<div>
			<button onClick={(event) => handleClick(event)}>Load videogames</button>
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
					<select>
						<option defaultValue='ALL'></option>
						<option value='db'>Database</option>
						<option value='api'>API</option>
					</select>
				{/* <button onClick={cleanFilters()}>Clear Filters</button> */}
			</form>
		</div>
	)
}