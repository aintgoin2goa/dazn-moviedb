'use strict';
const express = require('express');
const exhbs = require('express-handlebars');
const app = express();
const PORT = Number(process.env.POST) || 3333;
const log = require('./lib/log');

const controllers = {
	home: require('./controllers/home-controller'),
	movies: require('./controllers/movie-controller')
};

app.engine('handlebars', exhbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

app.get('/', controllers.home.index);
app.get('/api/search', controllers.movies.searchMovies);


if(!module.parent){
	app.listen(PORT, () => {
		log(`Listening on port ${PORT}`)
	});
}else{
	module.exports = app;
}
