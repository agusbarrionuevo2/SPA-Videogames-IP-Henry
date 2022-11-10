require('dotenv').config();
const {
	API_KEY
  } = process.env;
const axios = require('axios');
const {Genre, Videogame, Op} = require('../../db')



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
	return genres
}

//Busca los videojuegos de la API y busca los primeros 15 videojuegos de la api que coincidan con el nombre que recibe por parametro --------
//filtra lo que devuelve axios y devuelve solo la informacion necesaria para la ruta principal
async function getVideogames (name) {
	let result = []
	if(name){ //by name
		const videogamesByName = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`)
			.then(response => response.data)
				videogamesByName.results.forEach(v => {
					 if(result.length < 15){
					// 	result.push({
					// 		name: v.name,
					// 		image: v.background_image,
					// 		genre: v.genres.map(g => g.name)
					// 	})
						result.push(v)
					 }
				});
		if(!result.length) throw new Error(`No matches were found with the name: ${name}`)
		return result
	}
	//todos los videojuegos
	return get100Videogames()
}

//Busca los primeros 100 videojuegos de la api
async function get100Videogames(){
	const urls = [`https://api.rawg.io/api/games?key=${API_KEY}&page=1`, `https://api.rawg.io/api/games?key=${API_KEY}&page=2`, `https://api.rawg.io/api/games?key=${API_KEY}&page=3`, `https://api.rawg.io/api/games?key=${API_KEY}&page=4`, `https://api.rawg.io/api/games?key=${API_KEY}&page=5`]
	const requests = await Promise.all(urls.map(u => axios.get(u).then(response => response.data)))
	const result = []
	const infoFilter = requests.forEach(r => r.results.forEach(v => result.push(v)))
	// const infoFilter = requests.forEach(r => r.results.forEach(v => result.push({
	// 						name: v.name,
	// 						image: v.background_image,
	// 						genre: v.genres.map(g => g.name)
	// 					})))
	return result
}

//Busca los videojuegos de la db por nombre y tambien busca todos los videojuegos de la db
async function getVideogamesFromDb(name){
	if(name){
		let videogames = Videogame.findAll({
			where: {
				name: name
			}
		})
		return videogames 
	}	
	let videogames = Videogame.findAll()
	return videogames
}


//trae todos los videojuegos, tanto de la db como de la api. y tambien lo hace por nombre
async function getAllVideogames(name){
	if(name){
		const dbByName = await getVideogamesFromDb(name)
		const apiByName = await getVideogames(name)
		return apiByName.concat(dbByName)
	}
	const dB = await getVideogamesFromDb()
	const api = await getVideogames() 
	return dB.concat(api)
}

//Busca info un videojuego en especifico ---------------------------------------------------------------------------------------
async function getVideogameDetail (id) {
	if(id.includes("-")){
		const videogame = await Videogame.findByPk(id)
		return videogame
	}
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

//no funciona lo de abajo
//Crea un videojuego ------------------------------------------------------------------------------------------------------
// async function createVideogame ({name, description, release_date, rating, platforms}) {
// 	if(!name || !description || !platforms) throw new Error('Not enough information')
// 	else {
// 		const newVideogame = await Videogame.findOrCreate({
// 			where: {
// 				name,
// 				description,
// 				release_date,
// 				rating,
// 				platforms,
// 			} 
// 		})
// 		const genreDb = await Genre.findAll({
// 			where: { name: genre },
// 		});
// 		return newVideogame
// 	}
// }




module.exports = {
	getAllGenres,
	getVideogames,
	getVideogameDetail,
	get100Videogames,
	getVideogamesFromDb,
	getAllVideogames
}