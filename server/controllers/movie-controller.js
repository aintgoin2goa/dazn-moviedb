'use strict';
const moviedb = require('../lib/movie-db-client');

async function searchMovies (req, res, next){
	try{
		const query = req.query.q;
		if(!query){
			throw new Error('No query given');
		}

		const movies = await moviedb.search(query);
		res.json(movies);
	}catch(e){
		next(e);
	}
}

module.exports = {searchMovies};
