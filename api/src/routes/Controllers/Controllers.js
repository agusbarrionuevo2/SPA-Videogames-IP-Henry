require('dotenv').config();
const {
	API_KEY
  } = process.env;
const axios = require('axios');
const {Op, Genre, Videogame} = require('../../db')



//Busca todos los generos de la API y los guarda en la DB ---------------------------------------------------
async function getAllGenres () {
	let genres = []
	const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
		.then(response => response.data)
			allGenres.results.forEach(g =>{
				genres.push({
					name: g.name,
				})
			})
	 genres.forEach(g => {
		 Genre.findOrCreate({
			where: {
				name: g.name
			}
		})
	})
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

//Busca info un videojuego en especifico ---------------------------------------------------------------------------------------
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

//Crea un videojuego ------------------------------------------------------------------------------------------------------
async function createVideogame (name, description, release_date, rating) {
	if(!name || !description || !release_date || !rating) throw new Error('Not enough information')

}




module.exports = {
	getAllGenres,
	getVideogames,
	getVideogameDetail,
	createVideogame
}