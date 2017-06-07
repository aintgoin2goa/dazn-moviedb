/** @jsx h */


import './main.scss'
import {render, h, Component} from 'preact';
import store from './data/movies/store';
import SearchBox from './components/search-box';
import MovieList from './components/movie-list';

const container = document.getElementById('container');

class App extends Component {

	constructor (){
		super();
		this.state = store.getState();
	}

	componentDidMount (){
		store.subscribe(() => {
			this.setState(store.getState());
		})
	}

	render () {
		console.log('render', this.state);
		return (
			<div>
				<SearchBox {...this.state} />
				<MovieList {...this.state} />
			</div>
		);
	}

}

render(<App />, container);
