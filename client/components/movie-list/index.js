/** @jsx h */

import './styles.scss';
import {h} from 'preact';

const movie = props => <li key={props.name}>{props.name}</li>;

export default function MovieList(props){
	console.log('MovieList', props);
	return (
		<div className="movie-list__container">
			<ul className="movie-list">
				{props.movies.map(movie)}
			</ul>
		</div>

	)
}


