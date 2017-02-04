import {combineReducers} from 'redux'
import user from './profileReducer'
import categories from './categoriesReducer'
import auth from './authReducer'
import draw from './drawReducer'

const rootReducer = combineReducers({
  // short hand property names
  user,
  categories,
  auth,
  draw
})

export default rootReducer
