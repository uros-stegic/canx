import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Containers
import LetterContainer from './containers/LetterContainer';
import CategoryContainer from './containers/CategoryContainer';
import ProfileContainer from './containers/ProfileContainer';
import Categories from './containers/Categories';

// Views
import Login from './views/Login';
import Home from './views/Home';
import MainLayout from './views/MainLayout';
import IndexPage from './views/IndexPage';
import Register from './views/Register';
import Help from './views/Help';
import NotFound from './views/NotFound';
import { Provider } from 'react-redux';

// Style
import './style.css';

// Store
import {store, initialStore} from './store';
import { createStore } from 'redux';

let createdStore = createStore(initialStore, store);

export default (
	<Provider store={createdStore}>
		<Router history={browserHistory}>
			<Route path='/'>
				<IndexRoute component={IndexPage}/>
				<Route component={MainLayout}>
					<Route path='/home' component={Home}/>
					<Route path='/categories'>
						<IndexRoute component={Categories}/>
						<Route path='/categories/:category' component={CategoryContainer} />
						<Route path='/categories/:category/letters/:letter' component={LetterContainer} />
					</Route>
					<Route path='/profile' component={ProfileContainer}/>
					<Route path='/help' component={Help}/>
				</Route>
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
			</Route>
			<Route path='*' component={NotFound} />
		</Router>
  </Provider>
);
