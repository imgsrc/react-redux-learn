import { combineReducers } from 'redux'
import counterReducer from './counter'
import articles from './articles'
import filter from './filter'

export default combineReducers({
  count: counterReducer,
  articles, filter
})