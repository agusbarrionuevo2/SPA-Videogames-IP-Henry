import React from "react";
import { Link } from "react-router-dom";

export default function Landing(){
	return(
		<div>
			<h1>Henry Videogames LANDING PAGE</h1>
      		<Link to="/home">
			  <button>Home</button>
			</Link>
		</div>
	)
}