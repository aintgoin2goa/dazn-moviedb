/** @jsx h */

import './styles.scss';

import {h} from 'preact';
import store from '../../data/movies/store';
import {searchBoxChange, requestStart, requestComplete, requestError, moviesLoaded} from '../../data/movies/actions';
import {searchMovies} from '../../lib/js/api-client';

function onSearchBoxChange(e){
	store.dispatch(searchBoxChange(e.target.value));
}

function onSearchClick(){
	const searchTerm = store.getState().searchTerm;
	searchMovies(searchTerm, store, {requestStart, requestComplete, requestError, moviesLoaded});
}

const searchBox = props => {
	console.log('searchBox', props);
	return (
		<div className="search-box">
			<label htmlFor="search-box-input" className="search-box__label">Search</label>
			<input type="search" placeholder="Type here to search" className="search-box__input" onKeyUp={onSearchBoxChange} value={props.searchTerm} />
			<button className="search-box__button" onClick={onSearchClick}>Search</button>
		</div>
	)
};

export default searchBox;
