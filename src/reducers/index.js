import { combineReducers } from 'redux';
import joblistReducer from './joblist'

const rootReducer = combineReducers({
  joblist: joblistReducer
});
export default rootReducer;
