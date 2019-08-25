// External dependencies
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Local dependencies
import bundledReducers from '@store/reducers';

export const store = createStore(bundledReducers, applyMiddleware(thunk));
