import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByGenre, filterByName, filterByRating, getGenres } from "../redux/actions/actions"



export function FilterBar(){

	const dispatch = useDispatch()

	const videogames = useSelector(state => state.videogames)

	useEffect(()=> {
		dispatch(getGenres())
	},[videogames, dispatch])

	const genres = useSelector(state => state.genres)

	const handlerRating = (event) => {
		event.preventDefault()
		dispatch(filterByRating(event.target.value))
	}

	const handlerName = (event) => {
		event.preventDefault()
		dispatch(filterByName(event.target.value))
	}

	const handlerGenre = (event) => {
		event.preventDefault()
		dispatch(filterByGenre(event.target.value))
	}

	return (
		<div>
			<form>
				<label>Filter by Name: </label>
					<select name="FilterByName" onChange={handlerName}>
						<option defaultValue='ALL'></option>
						<optgroup label="By Name">
							<option value='A-Z'>A-Z</option>
							<option value='Z-A'>Z-A</option>
						</optgroup>
					</select>
				<label> Rating: </label>
					<select name="FilterByRating" onChange={handlerRating}>
						<option defaultValue='ALL'></option>
						<optgroup label="By Rating">
							<option value='0-5'>0-5</option>
							<option value='5-0'>5-0</option>
						</optgroup>
					</select>
				<label>Genre: </label>
					<select onChange={handlerGenre}>
						<option defaultValue='ALL'></option>
						{ genres && genres.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))}
					</select>
			</form>
		</div>
	)
}