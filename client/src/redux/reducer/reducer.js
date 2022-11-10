import {GET_GENRES} from '../actions/actions.js'


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
		default:
			return{...state}
	}
}


export default rootReducer;