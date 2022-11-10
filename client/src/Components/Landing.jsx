import React from "react";
import { NavLink } from "react-router-dom";

export default function Landing(){
	return(
		<div>
			<h1>Henry Videogames LANDING PAGE</h1>
      		<NavLink to="/home">
			  <button>Home</button>
			</NavLink>
		</div>
	)
}