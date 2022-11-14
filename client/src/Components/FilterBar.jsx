import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterByGenre, filterByName, filterByRating, getGenres } from "../redux/actions/actions"



export function FilterBar(){

	const dispatch = useDispatch()

	useEffect(()=> {
		dispatch(getGenres())
	})

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
			<label>Filter By: </label>
				<select name="FilterByName" onChange={handlerName}>
					<optgroup label="By Name">
						<option value='A-Z'>A-Z</option>
						<option value='Z-A'>Z-A</option>
					</optgroup>
				</select>
			<label> Rating: </label>
				<select name="FilterByRating" onChange={handlerRating}>
					<optgroup label="By Rating">
						<option value='0-5'>0-5</option>
						<option value='5-0'>5-0</option>
					</optgroup>
				</select>
			<label>Genre: </label>
				<select onChange={handlerGenre}>
					{ genres && genres.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))}
				</select>
		</div>
	)
}