import { NavLink } from "react-router-dom";
import './style/NavBar.css'

export function NavBar () {
	return (
		<div className="navbar-container">
			<ul>
				<li  className='nav-link'>
					<NavLink  to='/'>
						<p className="landing-btn">Landing</p>
					</NavLink>
				</li>
				<li  className='nav-link'>
					<NavLink  to='/home'>
						<p className="home-btn">Home</p>
					</NavLink>
				</li>
				<li  className='nav-link'>
					<NavLink  to='/create'>
						<p className="form-btn">Create a Videogame!</p>
					</NavLink>
				</li>
			</ul>
		</div>
	)
}