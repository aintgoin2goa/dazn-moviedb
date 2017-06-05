/** @jsx h */


import './main.scss'
import {render, h} from 'preact';
import store from './data/movies/store';
import SearchBox from './components/search-box';

const container = document.getElementById('container');

const App = (props) => {
	console.log('App', props);
	return (
		<div>
			{SearchBox(props)}
		</div>
	)
};

render(App(store.getState()), container);

store.subscribe(() => App(store.getState()));

