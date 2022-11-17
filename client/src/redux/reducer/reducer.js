import {CLEAN_DETAIL, CREATE_VIDEOGAME, FILTER_BY_GENRE, FILTER_BY_NAME, FILTER_BY_RATING, GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_DETAIL} from '../actions/actions.js'


const initialState = {
	genres: [],
	videogames: [],
	allVideogames: [],
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
				allVideogames: action.payload,
				videogames: action.payload
			}
		case CREATE_VIDEOGAME: 
			return {
				...state,
				// videogames: [...state.videogames, action.payload]
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
		case FILTER_BY_GENRE:
			if(action.payload){
				const filter = state.videogames.filter(v => v.genre.includes(action.payload)) //no me esta tomando los genres de la base de datos
				return {
					...state,
					videogames: filter
				}
			} else {
				return {
					...state,
					videogames: state.videogames
				}
			}
		case FILTER_BY_NAME:
			if(action.payload === 'A-Z'){
				const byName = state.videogames.sort((a,b) => { return a.name.localeCompare(b.name) })
				console.log(byName)
				return {
					...state,
					videogames: byName
				}
			} else if(action.payload === 'Z-A'){
				const byName = state.videogames.sort((a,b) => { return b.name.localeCompare(a.name) })
				console.log(byName)
				return{
					...state,
					videogames: byName
				}
			} else {
				console.log(state.videogames)
				return {
					...state,
					videogames: state.videogames
				}
			}
		case FILTER_BY_RATING:
			if(action.payload === '0-5'){
				const sort =  state.videogames.sort((a,b) => { return a.rating - b.rating })
				console.log(sort)
				return {
					...state,
					videogames: sort
				}
			} else if( action.payload ==='5-0'){
				const sort = state.videogames.sort((a,b) => { return b.rating - a.rating })
				console.log(sort)
				return {
					...state,
					videogames: sort
				}
			} else {
				console.log('filter')
				return {
					...state,
					videogames: state.videogames
				}
			}
		default:
			return{...state}
	}
}


export default rootReducer;