import React from 'react'
import { Route, IndexRoute } from 'react-router'

// Containers
import LetterContainer from './containers/LetterContainer'
import CategoryContainer from './containers/CategoryContainer'
import ProfileContainer from './containers/ProfileContainer'
import CategoriesContainer from './containers/CategoriesContainer'

// Views
import Login from './views/Login'
import Home from './views/Home'
import MainLayout from './views/MainLayout'
import IndexPage from './views/IndexPage'
import Register from './views/Register'
import Help from './views/Help'
import NotFound from './views/NotFound'

// Auth
import auth from './auth/authentication';

// Style
import './style/style.css'

export default (
			<Route path='/'>
				<IndexRoute component={IndexPage}/>
				<Route component={MainLayout}>
					<Route path='/home' component={Home}/>
					<Route path='/categories'>
						<IndexRoute component={CategoriesContainer}/>
						<Route path='/categories/:category' component={CategoryContainer} />
						<Route path='/categories/:category/letters/:letter' component={LetterContainer} />
					</Route>
					<Route path='/profile' component={ProfileContainer}/>
					<Route path='/help' component={Help} onEnter={requireAuth}/>
				</Route>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='*' component={NotFound} />
			</Route>
)

function requireAuth(nextState, replace) {
  console.log(auth.loggedIn());
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}
