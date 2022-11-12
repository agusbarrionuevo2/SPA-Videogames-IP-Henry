//Search bar

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getVideogames } from "../redux/actions/actions"


export function SearchBar (){
	const dispatch = useDispatch()
	const handlerChange = (event) => {
		event.preventDefault()
		dispatch(getVideogames(event.target.value))
	}

	return(
		<div>
			<input type="search" placeholder="Search videogames..." onChange={handlerChange}/>
			<input type="submit"/>
		</div>
	)
}