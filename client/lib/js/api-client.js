
require('whatwg-fetch');

function handleResponse(store, errorAction, completeAction, response){
	if(!response.ok){
		const err = new Error(`Failed to get movies - API returned ${response.status} ${response.statusText}`);
		store.dispatch(errorAction(err));
		store.dispatch(completeAction());
	}

	return response.json();
}

export function searchMovies(term, store, actions){
	store.dispatch(actions.requestStart());
	return fetch(`/api/search?q=${encodeURIComponent(term)}`)
		.then(handleResponse.bind(null, store, actions.requestError, actions.requestComplete))
		.then(movies => {
			console.log('movies', movies);
			store.dispatch(actions.moviesLoaded(movies));
			store.dispatch(actions.requestComplete());
		})
}
