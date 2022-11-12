import React, { useEffect, useState } from "react";
import './style/VideogameCreate.css'
import { useDispatch, useSelector } from 'react-redux'
import { createVideogame, getGenres } from "../redux/actions/actions";

export const validations = (input) => {
	let error ={}

	if(!input.name){
		error.name = 'Name is required'
	} else if (!/^[a-zA-Z0-9 ]{0,25}$/.test(input.name)){
		error.name = 'Name invalid'
	}

	if(!input.description){
		error.description = 'Description is required'
	} else if(!/^[a-zA-Z0-9 ,.]{0,150}$/.test(input.description)){
		error.description = 'Description invalid'
	}

	if(!input.rating){
		error.rating = 'Rating is required'
	} else if(!/^[1-5]\d*(\.\d)?$/.test(input.rating)) error.rating = 'Rating invalid'
	return error;

}


export default function VideogameCreate(){
	
	const dispatch = useDispatch();
	
	const genreDb = useSelector(state => state.genres)

	const platforms = [
		'PC',
		'Playstation 5',
		'Playstation 4',
		'Playstation 3',
		'Playstation 2',
		'Xbox One',
		'Xbox Series S/X',
		'Xbox 360',
		'Nintendo Switch',
		'iOS',
		'Android',
		'Nintendo 3DS',
		'Nintendo DS',
		'Wii',
	]
	
	const [error, setError] = useState({})

	const [input, setInput] = useState({
		name: '',
		description: '',
		rating: '',
		releaseDate: '',
		platforms: [],
	})

	useEffect(() =>{
	   dispatch(getGenres())
	},[dispatch])
	
	const handlerInput = (event) => {
		setInput({
			...input,
			[event.target.name] : event.target.value
		})
		setError(validations({
			...input,
			[event.target.name]: event.target.value
		}))
	}

	const handlerGenrePlatforms = (event) => {
		setInput({
			...input,
			[event.target.name]: [event.target.name].push(event.target.value)
		})
		setError(validations({
			...input,
			[event.target.name]: event.target.value
		}))
	}

	const handlerSubmit = (event) => {
		event.preventDefault()
		dispatch(createVideogame(input))
	}


	return (
		<div>
			<h1>Create Videogame</h1>
			<form>
				<label>Name: </label>
					<input type='text' name='name' value={input.name} onChange={handlerInput}></input>
					{error.name && (<p>{error.name}</p>)}
				<hr/>
				<label>Description: </label>
					<textarea name='description' value={input.description} onChange={handlerInput}></textarea>
					{error.description && (<p>{error.description}</p>)}
				<hr/>
				<label>Release Date: </label>
					<input type='date' name='releaseDate' max='2022-11-30' value={input.releaseDate} onChange={handlerInput}></input>
				<hr/>
				<label>Rating: </label>
					<input type='text' name='rating' value={input.rating} onChange={handlerInput}></input>
					{error.rating && (<p>{error.rating}</p>)}
				<hr/>
				<label>Genre: </label>
					<select  name='genre' value={input.genres} onChange={handlerGenrePlatforms}>
						<option>Select Genre</option>
						{
							genreDb && genreDb.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))
						}
					</select>
				<hr/>
				<label>Platforms: </label>
					<select name='platforms' value={input.platforms} onChange={handlerGenrePlatforms}>
						<option>Select Platforms</option>
						{
							platforms && platforms.map((p, index) => (<option key={index}value={p}>{p}</option>))
						}
					</select>
				<hr/>
				<button type="submit" onClick={handlerSubmit}>Create Videogame</button>
			</form>
		</div>
	)
}

//Nombre
// Descripción
// Fecha de lanzamiento
// Rating