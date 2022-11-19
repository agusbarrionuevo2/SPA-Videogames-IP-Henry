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
		rating: 1,
		release_date: '',
		platforms: '',
		genres: []
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

	const handleSelectGenres = (event) => {
		setInput({
			...input,
			genres: [...input.genres, event.target.value]
		})
	}
	const handleCheckedPlatforms = (event) => {
		if(event.target.checked){
			setInput({
				...input,
				platforms: input.platforms ? input.platforms + ', ' + event.target.value : event.target.value
			})
		}
	}


	const handlerSubmit = (event) => {
		event.preventDefault()
		dispatch(createVideogame(input))
		event.target.reset()
		setInput({
			name: '',
			description: '',
			rating: 1,
			release_date: '',
			platforms: [],
			genres: []
		})
	}


	return (
		<div>
			<h1>Create Videogame</h1>
				<form onSubmit={(event) => handlerSubmit(event)}>
					<label>Name: </label>
						<input type='text' name='name' value={input.name} onChange={(event) => handlerInput(event)}></input>
						{error.name && (<p>{error.name}</p>)}
					<hr/>
					<label>Description: </label>
						<textarea name='description' value={input.description} onChange={(event) => handlerInput(event)}></textarea>
						{error.description && (<p>{error.description}</p>)}
					<hr/>
					<label>Release Date: </label>
						<input type='date' name='release_date' max='2022-11-30' value={input.release_date} onChange={(event) => handlerInput(event)}></input>
					<hr/>
					<label>Rating: </label>
						<input type='number' min='1' max='5' name='rating' value={input.rating} onChange={(event) => handlerInput(event)}></input>
						{error.rating && (<p>{error.rating}</p>)}
					<hr/>
					<label>Genre: </label>
						<select  name='genre' value={input.genres} onChange={(event) => handleSelectGenres(event)} >
							<option>Select Genre</option>
							{
								genreDb && genreDb.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))
							}
						</select>
						<ul><li key='selectedGenres'>{input.genres.map(g => g + ',')}</li></ul>
					<hr/>
					<label>Platforms: </label>
							{platforms.map(p => (
								<div key={p}>
									<input
									type='checkbox'
									name='platforms'
									value={p}
									onChange={(event) => handleCheckedPlatforms(event)}
									></input>
									<label name={p}>{p}</label>
								</div>
							))}
						{/* <select name='platforms' value={input.platforms} onChange={(event) => handleSelectPlatforms(event)} >
							<option key='allPlatforms'>Select Platforms</option>
							{
								platforms && platforms.map((p, index) => (<option key={index} value={p}>{p}</option>))
							}
						</select> */}
					<hr/>
						{/* <ul><li key='selectedPlatforms'>{input.platforms.map(p =>p + ',')}</li></ul> */}
					<button type="submit" disabled={!input.name || !input.description || !input.platforms.length } >Create Videogame</button>
				</form>
		</div>
	)
}
