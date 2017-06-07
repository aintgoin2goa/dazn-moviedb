import {createStore} from 'redux';
import reducer from './reducer';

//using redux for managing state as I find it very easy to use

const initialState = {
	searchTerm: '',
	movies: []
};

export default createStore(reducer, initialState);
