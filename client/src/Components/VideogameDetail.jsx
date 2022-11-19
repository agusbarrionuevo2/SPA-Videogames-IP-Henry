import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogameDetail, cleanDetail } from "../redux/actions/actions";


export default function VideogameDetail(props){
	const dispatch = useDispatch()

	const videogameDetail = useSelector(state => state.videogameDetail)

	useEffect(() => {
		dispatch(getVideogameDetail(props.match.params.id))//investigar bien match.params!
		return () => {
			dispatch(cleanDetail())   //funcion que limpia el detalle una vez que salimos de la pag, vuelve a poner al estado como un obj vacio
		}
	}, [dispatch, props.match.params.id])

	// if(!videogameDetail.image){
	// 	videogameDetail.image = 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled-1150x647.png';
	// }
	return(
		<div>
			<h1>Detalle</h1>
			<img src={videogameDetail.image} alt='img'/>
			<h1>Name: {videogameDetail.name}</h1>
			<p key='description'>Description: {videogameDetail.description}</p>
			<p key='rating'>Rating: {videogameDetail.rating}</p>
			<p key='releaseDate'>Release Date: {videogameDetail.release_date}</p>
			<p key='platformsDetail'>Platforms: {videogameDetail.platforms}</p>
			<p key='genresDetail'>Genres:{videogameDetail.Genres && videogameDetail.Genres.map(g => g.name + ', ')}</p>	
		</div>
	)
}