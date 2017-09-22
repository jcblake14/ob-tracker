import axios from 'axios'
import history from '../history'

/**
 * ACTION TYPES
 */
const SET_DATE = 'SET_DATE';
const CLEAR_DATE = 'CLEAR_DATE';

/**
 * INITIAL STATE
 */
const defaultRange = {}

/**
 * ACTION CREATORS
 */
export const setDate = (option, date) => ({type: SET_DATE, option, date});
export const clearDate = () => ({type: CLEAR_DATE});

/**
 * THUNK CREATORS
*/


/**
 * REDUCER
 */
export default function (state = defaultRange, action) {
  switch (action.type) {
    case SET_DATE:
      return Object.assign({}, state, {[action.option]: action.date});
    case CLEAR_DATE:
      return defaultRange;
    default:
      return state
  }
}
