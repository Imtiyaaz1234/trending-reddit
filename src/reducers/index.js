import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import postReducer from './postReducer';
import pageReducer from './pageReducer';


const reducers = combineReducers({
  dataReducer,
  postReducer,
  pageReducer
});

export default reducers;
