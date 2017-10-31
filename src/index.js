import React from 'react';
import ReactDOM from 'react-dom';

import logger from 'redux-logger';
import thunk from 'redux-thunk';
import multi from 'redux-multi';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';
import { Route, Switch } from 'react-router';

import App from 'scenes/App';
import LandingPage from 'scenes/LandingPage';
import reducers from 'store/reducers';

import api from 'api';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const history = createHistory();

const store = createStore(
  combineReducers({
    router: routerReducer,
    ...reducers
  }),
  applyMiddleware(
    logger,
    routerMiddleware(history),
    thunk.withExtraArgument(api),
    multi
  )
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
        <Switch>
          <App>
            <Route exact path="/" component={LandingPage} />
            <Route path="/landing" component={LandingPage} />
          </App>
        </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
