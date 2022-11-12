import {CREATE_VIDEOGAME, GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_BY_NAME} from '../actions/actions.js'


const initialState = {
	genres: [],
	videogames: []
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
		default:
			return{...state}
	}
}


export default rootReducer;