import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Main from './components/Main';
import CategoryView from './components/CategoryView';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Main} />
			<Route path="category/:categoryId" component={CategoryView} />
		</Route>
	</Router>,
  document.getElementById('root')
);
