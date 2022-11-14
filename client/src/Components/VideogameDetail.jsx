import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail, cleanDetail } from "../redux/actions/actions";


export default function VideogameDetail(props){
	const dispatch = useDispatch()

	const videogameDetail = useSelector(state => state.videogameDetail)

	useEffect(() => {
		dispatch(getVideogameDetail(props.match.params.id))
		return () => {
			dispatch(cleanDetail())   //funcion que limpia el detalle una vez que salimos de la pag, vuelve a poner al estado como un obj vacio
		}
	}, [dispatch, props.match.params.id])


	return(
		<div>
			<h1>Detalle</h1>
			<h1>Name: {videogameDetail.name}</h1>
			<p>Description: {videogameDetail.description}</p>
			<p>Rating: {videogameDetail.rating}</p>
			<p>Release Date: {videogameDetail.release_date}</p>
			<p>Platforms: {videogameDetail.platforms}</p>
			<p>Genre: {videogameDetail.genre}</p>	
		</div>
	)
}