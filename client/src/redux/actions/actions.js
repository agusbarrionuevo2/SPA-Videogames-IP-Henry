export const GET_ALL_GAMES = 'GET_ALL_GAMES'
export const GET_GENRES = 'GET_GENRES'
export const CREATE_GAME = 'CREATE_GAME'
export const GET_GAMES_BY_NAME = 'GET_GAMES_BY_NAME'
export const GET_GAME_DETAILs = 'GET_GAME_DETAILS'


export const getGenres = () => async dispatch => {
	const videogames = await axios.get('/videogames')
	return dispatch({type: GET_GENRES, payload: videogames.data})
}