import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import './index.css';
import App from './App';
import LeagueHub from './LeagueHub';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  combineReducers({
    form: formReducer
  }),
  applyMiddleware(thunk)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component={App} />
        <Route exact path = '/leage_hub' component={LeagueHub} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
