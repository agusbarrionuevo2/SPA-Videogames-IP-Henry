import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames } from "../redux/actions/actions";
import { VideogameCard } from "./VideogameCard";
import { NavBar } from "./NavBar";
import { SearchBar } from "./SearchBar";
import { FilterBar } from "./FilterBar";


export default function Home (){
	const dispatch = useDispatch()

	const videogames = useSelector(state => state.videogames)

	useEffect(() =>{
		dispatch(getVideogames())
	 },[dispatch])
	 console.log(videogames)
	return (
		<div>
			<h1>Home</h1>
			<NavBar/>
			<SearchBar/>
			<FilterBar/>
			<div>
				{videogames.map(v =>  <VideogameCard
					id={v.id}
					name={v.name}
					genre={v.genre || v.Genres && v.Genres.map(g => g.name)}
					image= {v.image}
					rating = {v.rating}
				/>)}
			</div>
		</div>
	)
}