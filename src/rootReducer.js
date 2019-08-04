import { combineReducers } from 'redux';
import postsReducer from './feature/articles/reducer';

const appReducers = {
  posts: postsReducer,
};

const reducers = combineReducers(appReducers);

export default reducers;
