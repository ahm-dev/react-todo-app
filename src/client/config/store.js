// External dependencies
import { createStore } from 'redux';

// Local dependencies
import bundledReducers from '@store/reducers';

export const store = createStore(bundledReducers);
