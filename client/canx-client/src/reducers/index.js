import {combineReducers} from 'redux'
import profile from './profileReducer'
import categories from './categoriesReducer'
import auth from './authReducer'
import draw from './drawReducer'

const rootReducer = combineReducers({
  // short hand property names
  profile,
  categories,
  auth,
  draw
})

export default rootReducer
