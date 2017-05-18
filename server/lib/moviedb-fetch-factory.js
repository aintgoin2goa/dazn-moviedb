'use strict';
const fetch = require('node-fetch');
const qs = require('querystring');


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
