import { combineReducers } from 'redux';

import search from './searchReducer';
import movies from './moviesReducer';

const todoApp = combineReducers({
  search,
  movies
})

export default todoApp;
