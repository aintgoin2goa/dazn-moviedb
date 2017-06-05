/** @jsx h */

import './styles.scss';
import {h} from 'preact';


export default function MovieList(props){
	return (
		<ul className="movie-list">
			{props.movies.map(movie => <li key={movie.name}>{movie.name}</li>)}
		</ul>
	)
}


