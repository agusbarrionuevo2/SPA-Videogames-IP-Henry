import {CLEAN_DETAIL, CREATE_VIDEOGAME, FILTER_BY_GENRE, FILTER_BY_NAME, FILTER_BY_RATING, GET_ALL_VIDEOGAMES, GET_GENRES, GET_VIDEOGAMES_BY_NAME, GET_VIDEOGAME_DETAIL} from '../actions/actions.js'


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
		case FILTER_BY_GENRE:
			if(action.payload){
				console.log(action.payload)
				console.log(state.videogames)
				const filter = state.videogames.filter(v => v.genre.includes(action.payload))
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
				console.log(state.videogames)
				return {
					...state,
					videogames: state.videogames.sort((a,b)=>{
						return a.name.localeCompare(b.name)
					})
				}
			} else if(action.payload === 'Z-A'){
				console.log(state.videogames)
				return{
					...state,
					videogames: state.videogames.sort((a,b) => {
						return b.name.localeCompare(a.name)
					})
				}
			} else {
				return {
					...state,
					videogames: state.videogames
				}
			}
		case FILTER_BY_RATING:
			if(action.payload === '0-5'){
				console.log('filter 0-5')
				console.log(state.videogames)
				return {
					...state,
					videogames: state.videogames.sort((a,b) => {
						return a.rating - b.rating
					})
				}
			} else if( action.payload ==='5-0'){
				console.log('filter 5-0')
				console.log(state.videogames)
				return {
					...state,
					videogames: state.videogames.sort((a,b) => {
						return b.rating - a.rating
					})
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