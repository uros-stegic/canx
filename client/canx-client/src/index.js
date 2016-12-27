import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './App';
import Login from './Login';
import Home from './Home';
import Main from './Main';
import Letters from './Letters';
import IndexPage from './IndexPage';
import Categories from './Categories';
import Register from './Register';
import Help from './Help';
import Profile from './Profile';

import './style.css';

ReactDOM.render((
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={IndexPage}/>
			<Route component={Main}>
				<Route path='/home' component={Home}/>
				<Route path='/categories' component={Categories}>
					<Route path='/categories/upper' component={Letters} title='Uppercase' letters="ABCDEFGHIJKLMNOPQRSTUVWXZ"  />				
					<Route path='/categories/lower' component={Letters} title='Lowercase' letters="abcdefghijklmnopqrstuvwxyz"  />
				</Route>
				<Route path='/profile' component={Profile}/>
				<Route path='/help' component={Help}/>
			</Route>
			<Route path='/login' component={Login} />
			<Route path='/register' component={Register} />	
		</Route>
	</Router>
	),
  document.getElementById('root')
);
