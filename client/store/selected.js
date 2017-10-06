/**
 * ACTION TYPES
 */
const SELECT = 'SELECT'

/**
 * INITIAL STATE
 */
const defaultSelected = [];

/**
 * ACTION CREATORS
 */
export const setSelected = (idxs) => ({type: SELECT, idxs})

/**
 * REDUCER
 */
export default function(state = defaultSelected, action){
  switch(action.type){
    case SELECT:
      return action.idxs;
    default:
      return state;
  }
}
