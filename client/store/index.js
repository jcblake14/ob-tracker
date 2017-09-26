import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user'
import delivery from './delivery'
import deliveries from './deliveries'
import range from './range'
import form from './form'
import filters from './filters'
import sortTable from './sort'
import tab from './tab'

const reducer = combineReducers({user, delivery, deliveries, range, form, filters, sortTable, tab})
const middleware = applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './delivery'
export * from './deliveries'
export * from './range'
export * from './form'
export * from './filters'
export * from './sort'
export * from './tab'
