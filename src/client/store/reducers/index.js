// External dependencies
import { combineReducers } from 'redux';

// Local dependencies
import todoStore from '@store/reducers/todo';

const bundledReducers = combineReducers({ todoStore });

export default bundledReducers;
