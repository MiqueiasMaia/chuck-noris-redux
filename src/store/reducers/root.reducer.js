import { combineReducers } from 'redux';
import counterReducer from './counter.reducer';
import jokeReducer from './joke.reducer';

const rootReducer = combineReducers({
  counterReducer,
  jokeReducer
});

export default rootReducer;
