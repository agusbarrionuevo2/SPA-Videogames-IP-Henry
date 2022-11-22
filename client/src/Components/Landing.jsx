import React from "react";
import { NavLink } from "react-router-dom";
import './style/Landing.css'

export default function Landing(){
	return(
		<div className='landing-container'>
			<h1 className="title">Welcome to the Videogames App!</h1>
			{/* <NavLink to='home'><img src='https://w7.pngwing.com/pngs/973/8/png-transparent-joystick-computer-icons-game-controllers-video-game-joystick-electronics-video-game-game-controllers-thumbnail.png'/></NavLink> */}
		</div>
	)
}