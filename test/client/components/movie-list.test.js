/** @jsx h **/
import {expect} from 'chai';
import MovieList from '../../../client/components/movie-list';

describe('MovieList', () => {

	it('Should render out a list of movies', () => {
		const props = {
			movies:[
				{name:'movie 1'},
				{name:'movie 2'},
				{name:'movie 3'}
			]
		};

		const result = MovieList(props);
		expect(result.attributes.className).to.equal('movie-list');
		expect(result.nodeName).to.equal('ul');
		expect(result.children).to.have.length(props.movies.length);
		for(let i=0, l=props.movies.length; i<l; i++){
			console.log(result.children[i]);
			expect(result.children[i].nodeName).to.equal('li');
			expect(result.children[i].children[0]).to.equal(props.movies[i].name);
			expect(result.children[i].key).to.equal(props.movies[i].name);
		}
	})
});
