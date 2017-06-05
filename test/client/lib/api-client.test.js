import {expect} from 'chai';
import fetchMock from 'fetch-mock';
import {searchMovies} from '../../../client/lib/js/api-client'
import sinon from 'sinon';

describe('API Client', () => {

	const fixture = [{name:'name'}];

	before(() => {
		fetchMock.get('*', fixture);
	});

	after(() => {
		fetchMock.restore();
	});

	it('Should be able to search for movies', () => {
		const searchTerm = 'boo';
		const store = {dispatch:sinon.spy()};
		const actions = {
			requestStart:sinon.spy(),
			moviesLoaded: sinon.spy(),
			requestComplete: sinon.spy()
		};

		return searchMovies(searchTerm, store, actions)
			.then(() => {
				sinon.assert.called(actions.requestStart);
				sinon.assert.called(actions.requestComplete);
				sinon.assert.calledWith(actions.moviesLoaded, fixture);
			})
	});
});
