
export const Actions = {
	SEARCH_BOX_CHANGE: Symbol(),
	REQUEST_START: Symbol(),
	REQUEST_COMPLETE: Symbol(),
	REQUEST_ERROR: Symbol(),
	MOVIES_LOADED: Symbol()
};

export const searchBoxChange = value => ({type:Actions.SEARCH_BOX_CHANGE, value});
export const requestStart = () => ({type:Actions.REQUEST_START});
export const requestComplete = () => ({type:Actions.REQUEST_COMPLETE});
export const requestError = (error) => ({type:Actions.REQUEST_ERROR, error});
export const moviesLoaded = movies => ({type:Actions.MOVIES_LOADED, movies});
