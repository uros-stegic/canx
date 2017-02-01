import React from 'react'
import ReactDOM from 'react-dom'
import routes from './router'
import {Router, browserHistory} from 'react-router'
import {createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

let createdStore = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={createdStore}>
		<Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
)
