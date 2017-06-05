import {Actions} from './actions';

const clone = obj => JSON.parse(JSON.stringify(obj));

export default function(previousState, action){
	const state = clone(previousState);

	switch(action.type){
		case Actions.SEARCH_BOX_CHANGE:
			state.searchTerm = action.value;
			break;
		case Actions.MOVIES_LOADED:
			state.movies = clone(action.movies);
	}

	return state;
}
