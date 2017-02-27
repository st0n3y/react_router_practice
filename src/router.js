// Libs
import React from 'react';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router';

// Components
import App from './components/App';
import Home from './components/Home';
import About from './components/About';
import Courses from './components/Courses';
import Teachers from './components/Teachers';

import HTML from './components/courses/HTML';
import CSS from './components/courses/CSS';
import JavaScript from './components/courses/JavaScript';

const routes = (
	<Router history={browserHistory}>
		<Route component={App}>
			<Route path="/" component={Home} />
			<Route path="about" component={About} />
			<Route path="about" component={About} />
			<Route path="courses" component={Courses}>
				<IndexRedirect to="html" />
				<Route path="html" component={HTML} />
				<Route path="css" component={CSS} />
				<Route path="javascript" component={JavaScript} />
			</Route>
			<Route path="teachers" component={Teachers} />
		</Route>
	</Router>
);
export default routes;