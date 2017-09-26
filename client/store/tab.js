/**
 * ACTION TYPES
 */
const CHANGE_TAB = 'CHANGE_TAB';

/**
 * INITIAL STATE
 */
const defaultTab = 'chart'

/**
 * ACTION CREATORS
 */
export const changeTab = (tab) => ({type: CHANGE_TAB, tab});

/**
 * THUNK CREATORS
*/


/**
 * REDUCER
 */
export default function(state = defaultTab, action){
  switch(action.type){
    case CHANGE_TAB:
      return action.tab;
    default:
      return state;
  }
}
