'use strict';
const imageBase = 'http://image.tmdb.org/t/p';

function imageUrl (path, width = 185){
	if(typeof path !== 'string'){
		return '';
	}

	return `${imageBase}/w${width}${path}`;
}

function movieModel (data){
	return {
		name: data.title,
		poster: imageUrl(data.poster_path),
		description: data.overview
	}
}

module.exports = movieModel;
