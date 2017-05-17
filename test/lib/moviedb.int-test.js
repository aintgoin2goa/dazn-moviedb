'use strict';
const expect = require('chai').expect;

describe('Movie DB client', () => {

	let factory;

	before(() => {
		factory = require('../../server/lib/moviedb-fetch-factory')
	});


	it('Should be able to get a list of movies matching a given keyword', () => {
		const fetch = factory.search('Star Wars');
		return fetch()
			.then(results => {
				console.dir(results);
			})
	})
});
