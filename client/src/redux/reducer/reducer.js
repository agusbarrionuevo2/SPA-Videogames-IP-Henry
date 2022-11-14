import {CLEAN_DETAIL, CREATE_VIDEOGAME, GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_DETAIL} from '../actions/actions.js'


const initialState = {
	genres: [],
	videogames: [],
	videogameDetail: {}
}

const rootReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_GENRES:
			return {
				...state,
				genres: action.payload
			}
		case GET_ALL_VIDEOGAMES:
			return {
				...state,
				videogames: action.payload
			}
		case CREATE_VIDEOGAME: 
			return {
				...state,
				videogames: [...state.videogames, action.payload]
			}
		case GET_VIDEOGAMES_BY_NAME:
			return {
				...state,
				videogames: action.payload
			}
		case GET_VIDEOGAME_DETAIL:
			return {
				...state,
				videogameDetail: action.payload
			}
		case CLEAN_DETAIL: 
			return {
				...state,
				videogameDetail: {}
			}
		default:
			return{...state}
	}
}


export default rootReducer;