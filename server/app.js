'use strict';
const express = require('express');
const app = express();
const PORT = Number(process.env.POST) || 3333;
const log = require('./lib/log');

const controllers = {
	movies: require('./controllers/movie-controller')
};

app.get('/api/search', controllers.movies.searchMovies);



if(!module.parent){
	app.listen(PORT, () => {
		log(`Listening on port ${PORT}`)
	});
}else{
	module.exports = app;
}
