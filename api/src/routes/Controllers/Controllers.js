require('dotenv').config();
const {
	API_KEY
  } = process.env;
const axios = require('axios')

async function getAllGenres () {
	const allGenres = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
	.then(response => response.data)
	return allGenres
}

module.exports = {
	getAllGenres
}