
import { useDispatch } from "react-redux"
import { getVideogamesByName } from "../redux/actions/actions"


export function SearchBar (){
	const dispatch = useDispatch()
	
	const handlerChange = (event) => {
		event.preventDefault()
		dispatch(getVideogamesByName(event.target.value))
	}

	return(
		<div>
			<input type="search" placeholder="Search videogames..." onChange={handlerChange}/>
		</div>
	)
}