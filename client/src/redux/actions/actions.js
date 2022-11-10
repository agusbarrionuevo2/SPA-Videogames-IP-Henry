import axios from 'axios'
export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_GENRES = 'GET_GENRES'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME'
export const GET_GAME_DETAILs = 'GET_GAME_DETAILS'


export  function getGenres() {
	return async function (dispatch) {
		const response = await axios.get('http://localhost:3001/genres')
			return dispatch({type: GET_GENRES, payload: response.data})
	}
}