import React, { useState } from "react";
import './style/VideogameCreate.css'

export const validations = (input) => {
	let error ={}

	if(!input.name){
		error.name = 'Name is required'
	} else if (input.name.length > 25 || input.name.length < 3){
		error.name = 'Name invalid'
	}

	if(!input.description){
		error.description = 'Description is required'
	} else if(input.description.length > 100 || input.description.length < 25){
		error.description = 'Description invalid'
	}

	if(!input.rating){
		error.rating = 'Rating is required'
	} else if(input.rating > 5 || input.rating < 0) error.rating = 'Rating invalid'
	return error;

}


export default function VideogameCreate(){

	const [error, setError] = useState({})

	const [input, setInput] = useState({
		name: '',
		description: '',
		rating: '',
		releaseDate: ''
	})

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

	const handlerSubmit = (event) => {
		event.preventDefault()
	}



	return (
		<div>
			<h1>Create Videogame</h1>
			{/* debe contener formulario CONTROLADO x JS de creacion de videojuegos 
				con los campos nombre, descripcion, fecha de lanzamiento y  rating
				debe tener la posibilidad de agregar varios generos
				debe tener la posibilidad de agregar varias plataformas*/}
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
					<select>
						<option></option>
					</select>
				<hr/>
				<label>Platforms: </label>
					<select>
						<option></option>
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