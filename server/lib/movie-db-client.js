'use strict';
const movieModel = require('../models/movie-model');

// This gets the data from movie db and converts it into an internal, reliable format
async function search (query, fetchFactory = require('./moviedb-fetch-factory')){
	const fetch = fetchFactory.search(query);
	const result = await fetch();
	return result.results.map(movieModel);
}

module.exports = {search};
