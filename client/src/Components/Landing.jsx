import React from "react";
import { NavLink } from "react-router-dom";
import './style/Landing.css'

export default function Landing(){
	return(
		<div>
			<div className='landing-container'>
				<NavLink to="/home"><h1 className="title">Welcome to the Videogames App!</h1></NavLink>
			</div>
		</div>
	)
}