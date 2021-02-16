import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './index.css';
import EventIndex from './components/event_index';
import EventNew from './components/event_new';
import reducer from './reducers';


const store = createStore(reducer, applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventNew}/>
        <Route exact path="/" component={EventIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

