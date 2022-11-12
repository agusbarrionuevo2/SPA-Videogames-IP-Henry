import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './style/VideogameCard.css'

export function VideogameCard ({name, image, genre}) {

	return (
		<div className="card" onClick={''}>
			<img src={image} alt='img'/>
			<div className="container">
				<h1>Name: {name}</h1>
				<h2>Genres: {genre}</h2>
			</div>
		</div>
	)
}