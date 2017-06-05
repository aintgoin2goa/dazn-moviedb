import {createStore} from 'redux';
import reducer from './reducer';

const initialState = {
	searchTerm: '',
	movies: []
};

export default createStore(reducer, initialState);
