'use strict';
const movieModel = require('../models/movie-model');

async function search (query, fetchFactory = require('./moviedb-fetch-factory')){
	const fetch = fetchFactory.search(query);
	const result = await fetch();
	return result.results.map(movieModel);
}

module.exports = {search};
