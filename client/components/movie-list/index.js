/** @jsx h */

// this component displays the movies returned from the server

import './styles.scss';
import {h} from 'preact';

const poster = props => `background-image:url(${props.poster})`;

const movie = props => {
	return (
		<li className="movie-list__movie" style={poster(props)} key={props.name}>
			<span className="movie-list__title"> {props.name}</span>
		</li>
	);
};

export default function MovieList(props){
	const movies = props.movies.map(movie);
	return (
		<div className="movie-list__container">
			<ul className="movie-list">
				{movies}
			</ul>
		</div>

	)
}


