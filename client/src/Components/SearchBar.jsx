
import { useDispatch} from "react-redux"
import { getVideogamesByName, cleanSearch } from "../redux/actions/actions"
import { useState } from "react";
import './style/Search.css'

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
			<form  className="search-container" onSubmit={handlerSubmit}>
				<input className="search-input" type="text" placeholder=" Insert name..." value={name} onChange={handlerChange}/>
				<div className='search-btn'>
					<button className="s-btn" type="submit">Search</button>
				</div>
			</form>
	)
}