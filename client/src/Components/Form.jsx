import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { createVideogame, getGenres } from "../redux/actions/actions";
import './style/Form.css'

export const validations = (input) => {
	let error ={}

	if(!input.name){
		error.name = 'Name is required'
	} else if (!/^[a-zA-Z0-9 ]{0,25}$/.test(input.name)){
		error.name = 'Name invalid'
	}

	if(!input.description){
		error.description = 'Description is required'
	} else if(!/^[a-zA-Z0-9 ,.]{25,150}$/.test(input.description)){
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
			<h1>Create Your Own Videogame</h1>
			<div className="form-container">
			<form className="form" onSubmit={(event) => handlerSubmit(event)}>
				<div className="form-item">
					<p>Create Your Own Videogame!</p>
				</div>
					<div className="form-item">
						<label>Name: </label>
							<input id="name" className='text-input' type='text' name='name' value={input.name} onChange={(event) => handlerInput(event)} placeholder='Be creative!...'></input>
							{error.name && (<p className="error">{error.name}</p>)}
					</div>
						<label>Description: </label>
					<div className="form-item">
							<textarea  id="descr" name='description' value={input.description} onChange={(event) => handlerInput(event)} placeholder='How would you describe this game?'></textarea>
							{error.description && (<p>{error.description}</p>)}
					</div>
					<div className="form-item" id="date">
							<label>Release Date: </label>
							<input className="releaseDate" type='date' name='release_date' max='2022-11-30' value={input.release_date} onChange={(event) => handlerInput(event)}></input>
					</div>
					<div className="form-item" id="rat">
						<label>Rating: </label>
							<input  className='rating' type='number' min='1' max='5' step='0.1' name='rating' value={input.rating} onChange={(event) => handlerInput(event)}></input>
							{error.rating && (<p>{error.rating}</p>)}
					</div>
					<div className="form-item" id="gen">
						<label>Genre: </label>
							<select  name='genre' value={input.genres} onChange={(event) => handleSelectGenres(event)}>
								<option>Select Genre</option>
								{
									genreDb && genreDb.map(g => (<option key={g.id} value={g.name}>{g.name}</option>))
								}
							</select>
					</div>
					<div className="form-item-selected">
								<ul><li key='selectedGenres'>Selected genres: {input.genres.map(g => g + ',')}</li></ul>
					</div>
					<div className="form-item" id="plat">
					<label>Platforms: </label>
						<div className='platform-selector'>
							{platforms.map(p => (
								<div className="select">
									<input
									type='checkbox'
									name='platforms'
									value={p}
									onChange={(event) => handleCheckedPlatforms(event)}
									></input>
									<label name={p}>{p}</label>
								</div>
									))}
						</div>
					</div>
					<div className="form-item">
						<button className="submit-btn" type="submit" disabled={!input.name || !input.description || !input.platforms.length } >Create</button>
					</div>
				</form>
			</div>
		</div>
	)
}


{/* <select name='platforms' value={input.platforms} onChange={(event) => handleSelectPlatforms(event)} >
							<option key='allPlatforms'>Select Platforms</option>
							{
								platforms && platforms.map((p, index) => (<option key={index} value={p}>{p}</option>))
							}
						</select> */}

						{/* <ul><li key='selectedPlatforms'>{input.platforms.map(p =>p + ',')}</li></ul> */}
