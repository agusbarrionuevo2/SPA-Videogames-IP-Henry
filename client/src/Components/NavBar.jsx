import { NavLink } from "react-router-dom";
import './style/NavBar.css'

export function NavBar () {
	return (
		<div className="navbar-container">
			<ul>
				<li>
					<NavLink  className='nav-link' to='/home'>
						<p className="home-btn">Home</p>
					</NavLink>
				</li>
				<li>
					<NavLink  className='nav-link' to='/create'>
						<p className="form-btn">Create a Videogame!</p>
					</NavLink>
				</li>
				<li>
					<NavLink  className='nav-link' to='/'>
						<p className="langing-btn">Landing</p>
					</NavLink>
				</li>
			</ul>
		</div>
	)
}