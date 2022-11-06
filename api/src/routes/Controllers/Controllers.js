require('dotenv').config();
const {
	API_KEY
  } = process.env;
const axios = require('axios');


//Busca todos los generos de la API ---------------------------------------------------
async function getAllGenres () {
	const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
	.then(response => response.data)
	return allGenres
}

//Busca los videojuegos de la API y busca los videojuegos de la api que coincidan con el nombre que recibe por parametro --------
async function getVideogames (name) {
	if(name){
		const videogamesByName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
		.then(response => response.data)
		return videogamesByName
	}
	const videogames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
	.then(response => response.data)
	return videogames
}

module.exports = {
	getAllGenres,
	getVideogames,
}