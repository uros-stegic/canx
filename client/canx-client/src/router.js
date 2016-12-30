import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

// Containers
import CategoryContainer from './containers/CategoryContainer';
import Categories from './containers/Categories';

// Views
import Login from './views/Login';
import Home from './views/Home';
import MainLayout from './views/MainLayout';
import IndexPage from './views/IndexPage';
import Register from './views/Register';
import Help from './views/Help';
import Profile from './views/Profile';
import NotFound from './views/NotFound';

// Style
import './style.css';

export default (
	<Router history={browserHistory}>
		<Route path='/'>
			<IndexRoute component={IndexPage}/>
			<Route component={MainLayout}>
				<Route path='home' component={Home}/>
				<Route path='categories'>
					<IndexRoute component={Categories}/>
					<Route path='/categories/:category' component={CategoryContainer} />
				</Route>
				<Route path='/profile' component={Profile}/>
				<Route path='/help' component={Help}/>
			</Route>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />	
		</Route>
		<Route path='*' component={NotFound} />
	</Router>
);
