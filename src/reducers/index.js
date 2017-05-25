import { combineReducers } from 'redux';

import search from './searchReducer';
import videos from './videosReducer';

const todoApp = combineReducers({
  search,
  videos
})

export default todoApp;
