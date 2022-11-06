require('dotenv').config();
const {
	API_KEY
  } = process.env;
const axios = require('axios');



//Busca todos los generos de la API ---------------------------------------------------
async function getAllGenres () {
	let genres = []
	const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
		.then(response => response.data)
			allGenres.results.forEach(g =>{
				genres.push({
					name: g.name,
					games_count: g.games_count,
					image: g.image_background
				})
			})
	return genres
}

//Busca los videojuegos de la API y busca los videojuegos de la api que coincidan con el nombre que recibe por parametro --------
//filtra lo que devuelve axios y devuelve solo la informacion necesaria para la ruta principal
async function getVideogames (name) {
	let result = []
	if(name){
		const videogamesByName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
			.then(response => response.data)
				videogamesByName.results.forEach(v => {
					if(result.length < 15){
						result.push({
							name: v.name,
							image: v.background_image,
							genre: v.genres.map(g => g.name)
						})
					}
				});
		if(!result.length) throw new Error(`No matches were found with the name: ${name}`)
		return result
	}
	const videogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
	.then(response => response.data)
	videogames.results.forEach(v => {
			if(result.length < 15){
				result.push({
					name: v.name,
					image: v.background_image,
					genre: v.genres.map(g => g.name)
				})
			}
		});
	return result
}

//busca info un videojuego en especifico
async function getVideogameDetail (id) {
	const videogame = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
		.then(response => response.data)
	const videogameDetail = {
		name: videogame.name,
		description: videogame.description,
		image: videogame.background_image,
		genre: videogame.genres.map(g => g.name),
		release_date: videogame.released,
		rating: videogame.rating,
		platforms: videogame.parent_platforms.map(p => p.platform.name)
	}
	return videogameDetail
}

module.exports = {
	getAllGenres,
	getVideogames,
	getVideogameDetail
}