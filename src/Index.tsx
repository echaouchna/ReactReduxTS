import React from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import App from './components/App';
import PoweredBy from './components/Powered-by';
import createHistory from 'history/lib/createHashHistory';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import TodoApp from './components/TodoApp';

const appHistory = useRouterHistory(createHistory)({ queryKey: false });

window.React = React;

let store = createStore(todoApp, window.devToolsExtension && window.devToolsExtension());

render(
  (<Provider store={store}>
    <Router history={appHistory}>
      <Route path="/" component={App}>
        <Route path="/todo" component={TodoApp} />
        <Route path="/converter" component={PoweredBy} />
      </Route>
    </Router>
  </Provider>), document.getElementById('content')
);
