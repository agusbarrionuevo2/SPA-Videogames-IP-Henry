import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions/actions";
import { VideogameCard } from "./VideogameCard";


export default function Home (){
	const dispatch = useDispatch()

	useEffect(() =>{
		dispatch(getVideogames())
	 },[dispatch])

	const videogames = useSelector(state => state.videogames)
	 console.log(videogames)
	const [input, setInput] = useState({
		videogames: []
	})


	return (
		<div>
			<h1>Home</h1>
			<div>
				{videogames.map(v => <VideogameCard
					name={v.name}
					description={v.description}
					rating={v.rating}
					releaseDate={v.releaseDate}
					platforms= {v.platforms}
					genres={v.genres}
				/>)}
			</div>
		</div>
	)
}