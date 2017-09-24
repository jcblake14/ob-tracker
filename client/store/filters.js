import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const INITIALIZE_FILTERS = 'INITIALIZE_FILTERS';
const SET_VALUES = 'SET_VALUES'

/**
 * INITIAL STATE
 */
const defaultFilters = '';

/**
 * ACTION CREATORS
 */
export const initializeFilters = (filters) => ({type: INITIALIZE_FILTERS, filters})
export const setValues = (filter, values) => ({type: SET_VALUES, filter, values})

/**
 * THUNK CREATORS
*/


/**
 * REDUCER
 */
export default function(state = defaultFilters, action){
  switch(action.type){
    case INITIALIZE_FILTERS:
      return action.filters;
    case SET_VALUES:
      const newState = Object.assign({}, state);
      newState[action.filter].minValue = action.values.min;
      newState[action.filter].maxValue = action.values.max;
      return newState;
    default:
      return state;
  }
}
