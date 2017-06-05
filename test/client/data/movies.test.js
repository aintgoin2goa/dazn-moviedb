import {expect} from 'chai';
import reducer from '../../../client/data/movies/reducer';
import {Actions} from '../../../client/data/movies/actions';

describe('Movies Reducer', () => {

	it('Should set the search term when the search box changes', () => {
		const state = {searchTerm:'', movies:[]};
		const value = 'blah';
		const action = {type:Actions.SEARCH_BOX_CHANGE,value};
		const result = reducer(state, action);
		expect(result.searchTerm).to.equal(value);
	});

	it('Should set movies received from server', () => {
		const state = {searchTerm:'', movies:[]};
		const movies = [{foo:'bar'}];
		const action = {type:Actions.MOVIES_LOADED,movies};
		const result = reducer(state, action);
		expect(result.movies).to.deep.equal(movies);
	});
});
