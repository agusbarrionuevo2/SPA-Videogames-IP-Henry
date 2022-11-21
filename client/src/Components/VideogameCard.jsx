import React from "react";
import { NavLink } from "react-router-dom";
import './style/VideogameCard.css'

export function VideogameCard ({name, image, genre, id, rating}) {

	return (
		<div className="card-container">
			<NavLink to={`/detail/${id}`}>
					<div className="card">
							<img src={image} alt='img' className="card-img"/>
						<div className="card-details">
							<p className="card-header">Name: {name}</p>
							<p className="card-body">Genres: {genre && genre.map(g => g + ', ')}</p>
							<p className="card-rating">Rating: {rating}</p>
						</div>
					</div>
			</NavLink>
		</div>
	)
}