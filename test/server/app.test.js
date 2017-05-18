'use strict';
const request = require('supertest');
const expect = require('chai').expect;

describe('App', () => {

	let app;

	before((done) => {
		app = require('../../server/app');
		app.listen(3333, done);
	});

	it('Should have a route for search movies, which returns JSON', (done) => {
		request(app)
			.get('/api/search?q=star')
			.expect(response => {
				expect(response.body).to.be.an('array');
			})
			.expect(200, done);
	})
});
