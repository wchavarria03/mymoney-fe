import { combineReducers } from 'redux';
import categoryTypes from './categoryTypeReducer';
import navigation from './navigationReducer';

const rootReducer = combineReducers({
  categoryTypes,
  navigation,
});

export default rootReducer;
