import React from "react";
import { NavLink } from "react-router-dom";
import './style/VideogameCard.css'

export function VideogameCard ({name, image, genre, id, rating}) {
	// if(!image){
	// 	image = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
	// }
	
	return (
		<NavLink to={`/detail/${id}`}>
				<div className="card">
					<img src={image} alt='img'/>
					<div className="container">
						<h1>Name: {name}</h1>
						<h2>Genres: {genre && genre.map(g => g + ', ')}</h2>
						<h2>Rating: {rating}</h2>
					</div>
				</div>
		</NavLink>
	)
}