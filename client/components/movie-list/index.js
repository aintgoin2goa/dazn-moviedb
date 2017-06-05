/** @jsx h */

import './styles.scss';
import {h} from 'preact';


export default function MovieList(props){
	return (
		<div className="movie-list">
			{props.movies.map(movie => movie.name)}
		</div>
	)
}


