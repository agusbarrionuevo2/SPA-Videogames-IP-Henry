import { NavLink } from "react-router-dom";

export function NavBar () {
	return (
		<div>
			<NavLink to='/home'>
				<button>Home</button>
			</NavLink>
			<NavLink to='/create'>
				<button>Create a Videogame!</button>
			</NavLink>
			<NavLink to='/'>
				<button>Landing</button>
			</NavLink>
		</div>
	)
}