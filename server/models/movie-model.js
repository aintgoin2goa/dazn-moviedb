'use strict';
const imageBase = 'https://image.tmdb.org/t/p/';

function movieModel (data){
	return {
		name: data.title,
		poster: `${imageBase}${data.poster_path}`,
		description: data.overview
	}
}

module.exports = movieModel;
