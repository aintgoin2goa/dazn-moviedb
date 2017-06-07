/** @jsx h */

//using webpack to seperate out the css
// importing it this way means if I remove one of the react components the styles will disappear too
import './main.scss'

// using preact instead of react as its smaller
import {render, h, Component} from 'preact';
import store from './data/movies/store';
import SearchBox from './components/search-box';
import MovieList from './components/movie-list';

const container = document.getElementById('container');

//everything else is a function but it seems the root component still needs to be a class
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
		return (
			<div>
				<SearchBox {...this.state} />
				<MovieList {...this.state} />
			</div>
		);
	}

}

render(<App />, container);
