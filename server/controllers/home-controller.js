'use strict';
// I wouldn't usually bother putting this in it's own file at this point, but rather would wait till it grew
// and then refeactor it out

function index (req, res){
	res.render('home');
}

module.exports = {index};
