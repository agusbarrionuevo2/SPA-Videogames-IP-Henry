import React, { useState } from "react";
import './style/VideogameCreate.css'

export const validations = (input) => {
	let error ={}

	if(!input.name){
		error.name = 'Name is required'
	} else if (!/^[A-Za-z]+$/.test(input.name)){
		error.name = 'Name invalid'
	}

	if(!input.description){
		error.description = 'Description is required'
	} else if(/.{1,100}(?=\\s)/.test(input.description)){
		error.description = 'Description invalid'
	}
	// } else if(){

	// }

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
			<h1>Create</h1>
			{/* debe contener formulario CONTROLADO x JS de creacion de videojuegos 
				con los campos nombre, descripcion, fecha de lanzamiento y  rating
				debe tener la posibilidad de agregar varios generos
				debe tener la posibilidad de agregar varias plataformas

			*/}
			<form>
				<label>Name: </label>
					<input type='text' name='name' value={input.name} onChange={handlerInput}></input>
					{error.name && (<p>{error.name}</p>)}
				<hr/>
				<label>Description: </label>
					<input type='text' name='description' value={input.description} onChange={handlerInput}></input>
					{error.description && (<p>{error.description}</p>)}
				<hr/>
				<label>Release Date: </label>
					<input type='text' name='releaseDate' value={input.releaseDate} onChange={handlerInput}></input>
				<hr/>
				<label>Rating: </label>
					<input type='text' name='rating' value={input.rating} onChange={handlerInput}></input>
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