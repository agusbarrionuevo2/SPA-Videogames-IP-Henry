import {CLEAN_DETAIL, CREATE_VIDEOGAME, FILTER_BY_CREATION, FILTER_BY_GENRE, ORDER_BY_NAME, ORDER_BY_RATING, GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_DETAIL} from '../actions/actions.js'


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
				const filter = state.allVideogames.filter(function(v){
					if(v.genre){
						let coincidence = v.genre.includes(action.payload)
						return coincidence
					}
					else if(v.Genre) {
						let coincidence = v.Genre && v.Genre.includes(action.payload)
						return coincidence
					} 
				}) 
				return {
					...state,
					videogames: filter
				}
			} else {
				return {
					...state,
					videogames: state.allVideogames
				}
			}
		case ORDER_BY_NAME:
			if(action.payload === 'A-Z'){
				const byName = state.videogames.sort((a,b) => { return a.name.localeCompare(b.name) })
				return {
					...state,
					videogames: byName
				}
			} else if(action.payload === 'Z-A'){
				const byName = state.videogames.sort((a,b) => { return b.name.localeCompare(a.name) })
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
		case ORDER_BY_RATING:
			if(action.payload === '0-5'){
				const sort =  state.videogames.sort((a,b) => { return a.rating - b.rating })
				return {
					...state,
					videogames: sort
				}
			} else if( action.payload ==='5-0'){
				const sort = state.videogames.sort((a,b) => { return b.rating - a.rating })
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
		case FILTER_BY_CREATION: 
			if(action.payload === 'api'){
				const sortApi = state.allVideogames.filter(v => typeof v.id === 'number' )
				return {
					...state,
					videogames: sortApi
				}
			} else if(action.payload === 'db') {
				const sortDb = state.allVideogames.filter(v => typeof v.id === 'string')
				return {
					...state,
					videogames: sortDb
				}
			} else {
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