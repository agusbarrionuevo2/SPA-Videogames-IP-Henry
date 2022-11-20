
import { useDispatch} from "react-redux"
import { getVideogamesByName, cleanSearch } from "../redux/actions/actions"
import { useState } from "react";


export function SearchBar (){
	const dispatch = useDispatch()
	const [name, setName] = useState('');
	const handlerChange = (event) => {
		setName(event.target.value)
	}
	const handlerSubmit = (event) => {
		event.preventDefault();
		dispatch(cleanSearch())
		dispatch(getVideogamesByName(name));
		setName('')
	}
	return(
		<div>
			<form onSubmit={handlerSubmit}>
				<input type="text" placeholder="Search videogames..." value={name} onChange={handlerChange}/>
				<button type="submit">Search</button>
			</form>
		</div>
	)
}