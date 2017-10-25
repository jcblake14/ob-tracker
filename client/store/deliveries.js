import axios from 'axios'
import history from '../history'
import {initializeFilters} from '../store'
import {getFilterRanges} from '../utils'

/**
 * INITIAL STATE
 */
const defaultDeliveries = {
  all: [],
  selected: []
};

/**
 * ACTION TYPES
 */
const SET_DELIVERIES = 'SET_DELIVERIES';
const SET_SELECTED = 'SET_SELECTED';
const HIDE = 'HIDE';

/**
 * ACTION CREATORS
 */
export const setDeliveries = (deliveries) => ({type: SET_DELIVERIES, deliveries});
export const setSelectedDeliveries = (idxs) => ({type: SET_SELECTED, idxs})
export const hideDeliveries = (deliveries) => ({type: HIDE, deliveries})

/**
 * THUNK CREATORS
*/
export function getDeliveries(userId){
  return function(dispatch){
    return axios.get(`/api/users/${userId}/deliveries`)
    .then(res => {
      dispatch(setDeliveries(res.data));
      dispatch(initializeFilters(getFilterRanges(res.data)));
    })
  }
}

export function deleteDelivery(deliveryId, userId){
  return function(dispatch){
    return axios.delete(`/api/delivery/${deliveryId}/${userId}`)
    .then(res => {
      dispatch(setDeliveries(res.data))
    })
  }
}

function setSelection(deliveries, ids){

}

/**
 * REDUCER
 */
export default function (state = defaultDeliveries, action) {
  switch (action.type) {
    case SET_DELIVERIES:
      return Object.assign({}, state, {all: action.deliveries});
    case SET_SELECTED:
      return Object.assign({}, state, {selected: action.idxs});
    case HIDE:
      const deliveries = action.deliveries;
      state.selected.forEach(idx => deliveries[idx].hidden = true);
      return Object.assign({}, state, {all: deliveries});
    default:
      return state
  }
}
