import * as types from './actionTypes';
import { API_BASE } from '../constants';

const URI = '/category_types';

export function receiveCategoryTypes(json) {
  return {type: types.RECEIVE_CATEGORY_TYPES, categoryTypes: json.stuff};
}

export function fetchCategoryTypes() {
  return dispatch => {
    return fetch(`${API_BASE}${URI}`, {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    })
    .then(response => response.json())
    .then(json => dispatch(receiveCategoryTypes(json)));
  };
}
