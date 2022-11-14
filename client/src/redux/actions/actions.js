import axios from 'axios'
export const GET_ALL_VIDEOGAMES = 'GET_ALL_VIDEOGAMES'
export const GET_GENRES = 'GET_GENRES'
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME'
export const GET_VIDEOGAMES_BY_NAME = 'GET_VIDEOGAMES_BY_NAME'
export const GET_VIDEOGAME_DETAIL = 'GET_VIDEOGAMEGAME_DETAIL'
export const CLEAN_DETAIL = 'CLEAN_DETAIL'


export function getGenres () {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/genres')
			return dispatch({type: GET_GENRES, payload: response.data})
	}
}

export function getVideogamesByName (name) {
	return async function (dispatch) {
		const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
			return dispatch({type: GET_VIDEOGAMES_BY_NAME, payload: response.data})
	}
}

export function getVideogames () {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/videogames')
			return dispatch({type: GET_ALL_VIDEOGAMES, payload: response.data})
	}
}

export function createVideogame (videogame) {
	console.log(videogame)
	return async function (dispatch) {
		const newVideogame = await axios.post('http://localhost:3001/videogames', videogame)
			return dispatch({
				type: CREATE_VIDEOGAME,
				payload: newVideogame.data
			})
	}
}

export function getVideogameDetail (id) {
	return async function (dispatch) {
		const idVideogame = await axios.get(`http://localhost:3001/videogames/${id}`)
			return dispatch({
				type : GET_VIDEOGAME_DETAIL,
				payload: idVideogame.data
			})
	}
}

export function cleanDetail () {
	return {type :CLEAN_DETAIL}
}