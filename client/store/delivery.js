import axios from 'axios'
import history from '../history'

/**
 * INITIAL STATE
 */
const defaultDelivery = {
  date: '',
  patient_age: '',
  gravidity: '',
  parity: '',
  bmi: '',
  gestational_age: '',
  weeks: '',
  days: '',
  type: '',
  indication: '',
  induced: '',
  induction_reason: ''
}

/**
 * ACTION TYPES
 */
const UPDATE_FIELD = 'UPDATE FIELD'
const CLEAR_DELIVERY = 'CLEAR_DELIVERY'

/**
 * ACTION CREATORS
 */
const getUser = user => ({type: GET_USER, user})
export const updateField = (field, data) => ({type: UPDATE_FIELD, field, data})
export const clearDelivery = () => ({type: CLEAR_DELIVERY})

/**
 * THUNK CREATORS
 */
export function createDelivery(){
  return function(dispatch, getState){
    const state = getState();
    const gestational_age = state.delivery.weeks * 7 + state.delivery.days;
    const delivery = Object.assign({},
      state.delivery,
      {gestational_age},
      {userId: state.user.id}
    );
    return axios.post('/api/delivery', delivery)
    .then(res => {
      console.log('response from back end:', res.data)
    })
  }
}

/**
 * REDUCER
 */
export default function (state = defaultDelivery, action) {
  switch (action.type) {
    case UPDATE_FIELD:
      const newState = Object.assign({}, state, {[action.field]: action.data})
      if (newState.type !== 'C-section') newState.indication = '';
      if (newState.induced !== 'Yes') newState.induction_reason = '';
      return newState;
    case CLEAR_DELIVERY:
      return defaultDelivery;
    default:
      return state
  }
}
