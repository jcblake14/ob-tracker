import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_DELIVERIES = 'SET_DELIVERIES';

/**
 * INITIAL STATE
 */
const defaultDeliveries = []

/**
 * ACTION CREATORS
 */
const setDeliveries = (deliveries) => ({type: SET_DELIVERIES, deliveries})


/**
 * THUNK CREATORS
*/
export function getDeliveries(userId){
  return function(dispatch){
    return axios.get(`/api/users/${userId}/deliveries`)
    .then(res => {
      dispatch(setDeliveries(res.data));
    })
  }
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
