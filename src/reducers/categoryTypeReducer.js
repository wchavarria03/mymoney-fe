import initialState from './initialState';
import { FETCH_CATEGORY_TYPES, RECEIVE_CATEGORY_TYPES } from '../actions/actionTypes';

export default function categoryTypes(state = initialState.categoryTypes, action) {
  let newState;
  switch (action.type) {
    case FETCH_CATEGORY_TYPES:
      console.log('FETCH_STUFF Action')
      return action;
    case RECEIVE_CATEGORY_TYPES:
      newState = action.categoryTypes;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}
