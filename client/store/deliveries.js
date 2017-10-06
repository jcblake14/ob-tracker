import axios from 'axios'
import history from '../history'
import {initializeFilters} from '../store'
import {getFilterRanges} from '../utils'

/**
 * INITIAL STATE
 */
const defaultDeliveries = [];

/**
 * ACTION TYPES
 */
const SET_DELIVERIES = 'SET_DELIVERIES';

/**
 * ACTION CREATORS
 */
export const setDeliveries = (deliveries) => ({type: SET_DELIVERIES, deliveries});

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
      return action.deliveries;
    default:
      return state
  }
}
