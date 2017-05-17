'use strict';
const expect = require('chai').expect;
const sinon = require('sinon');

describe('Movie DB Client', () => {

	let client;

	const fixtures = {
		results: require('../fixtures/movies.json')
	};

	const fetchFactoryStub = {
		search: sinon.stub().returns(() => Promise.resolve(fixtures.results))
	};

	before(() => {
		client = require('../../server/lib/movie-db-client');
	});

	it('Should be able to search the DB for movies matching a search term', () => {
		const term = 'Star Wars';
		return client.search(term, fetchFactoryStub)
			.then(movies => {
				sinon.assert.calledWith(fetchFactoryStub.search, term);
				expect(movies).to.have.length(fixtures.results.results.length);
				for(let movie of movies){
					expect(movie).to.have.property('name');
					expect(movie).to.have.property('description');
					expect(movie).to.have.property('poster');
				}
			})
	})
});
