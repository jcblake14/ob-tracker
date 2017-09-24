import axios from 'axios'

/**
 * ACTION TYPES
 */
const NEW_SORT = 'NEW_SORT';

/**
 * INITIAL STATE
 */
const defaultSort = {
  column: '',
  order: ''
}

/**
 * ACTION CREATORS
 */
export const newSort = (column) => ({type: NEW_SORT, column});

/**
 * THUNK CREATORS
*/


/**
 * REDUCER
 */
export default function(state = defaultSort, action){
  switch(action.type){
    case NEW_SORT:
      if (state.column === action.column){
        if (state.order === 'asc') return {column: action.column, order: 'desc'}
        else return defaultSort;
      } else {
        return {column: action.column, order: 'asc'}
      }
    default:
      return state;
  }
}
