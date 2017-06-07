'use strict';
const fetch = require('node-fetch');
const qs = require('querystring');

/*
This probably seems a but odd
The main reason for this approach is to refactor out the part of the function that performs
the request the keep the rest of the movie-db client as pure as possible
A fetch factory is a factory function that returns a function that returns a promise for the thing you actually want
It doesn't need to perform a network request, but it ususally does
 */


if(!process.env.MOVIE_DB_API_KEY){
	throw new Error('Missing MOVIE_DB_API_KEY from environment variables');
}

function buildFetcher (endpoint, query){
	const url = `https://api.themoviedb.org/3${endpoint}`;
	query['api_key'] = process.env.MOVIE_DB_API_KEY;
	const querystring = qs.stringify(query);
	return () =>fetch(`${url}?${querystring}`).then(handleResponse.bind(null, url));
}

function handleResponse (url, response){
	if(!response.ok){
		throw new Error(`Received a ${response.status} ${response.statusText} from ${url}`);
	}else{
		return response.json();
	}
}

module.exports.search = (query) => buildFetcher('/search/movie', {query});
