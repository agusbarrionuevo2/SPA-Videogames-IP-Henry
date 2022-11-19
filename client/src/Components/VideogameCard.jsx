import React from "react";
import { NavLink } from "react-router-dom";
import './style/VideogameCard.css'

export function VideogameCard ({name, image, genre, id}) {

	return (
		<div className="card-container">
			<NavLink to={`/detail/${id}`}>
					<div className="card">
						<img src={image} alt='img' className="card-img"/>
						<h1 className="card-header">Name: {name}</h1>
						<p className="card-body">Genres: {genre && genre.map(g => g + ', ')}</p>
							{/* <div className="card-footer">
								<button>delete</button>
							</div> */}
					</div>
			</NavLink>
		</div>
	)
}