import axios from 'axios'
import history from '../history'

/**
 * INITIAL STATE
 */
const defaultForm = {
  valid: true,
  warn: false
}

/**
 * ACTION TYPES
 */
const TOGGLE_VALID = 'TOGGLE_VALID';
const TOGGLE_WARNING = 'WARN';

/**
 * ACTION CREATORS
 */
export const toggleValid = (valid) => ({type: MAKE_INVALID, valid});
export const toggleWarning = (warn) => ({type: TOGGLE_WARNING, warn})

/**
 * THUNK CREATORS
*/


/**
 * REDUCER
 */
export default function (state = defaultForm, action) {
  switch (action.type) {
    case TOGGLE_VALID:
      return Object.assign({}, state, {valid: action.valid});
    case TOGGLE_WARNING:
      return Object.assign({}, state, {warn: action.warn});
    default:
      return state
  }
}
