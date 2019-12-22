import initialState from './initialState';
import * as actionTypes from '../actions/actionTypes';

export default function categoryTypes(state = initialState.categoryTypes, action) {
  let newState;
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_TYPES:
      console.log('FETCH_STUFF Action')
      return action;
    case actionTypes.RECEIVE_CATEGORY_TYPES:
      newState = action.categoryTypes;
      console.log('RECEIVE_STUFF Action')
      return newState;
    default:
      return state;
  }
}
