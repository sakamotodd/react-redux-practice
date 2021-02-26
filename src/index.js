import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {composeWithDevTools} from 'redux-devtools-extension'
import './index.css';
import EventNew from './components/event_new'
import EventIndex from './components/event_index';
import EventShow from './components/event_show';
import reducer from './reducers';

const enhancer = process.env.NODE_ENV === 'development' ?
composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk)
const store = createStore(reducer, enhancer);


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/events/new" component={EventNew}/>
        <Route path="/events/:id" component={EventShow}/>
        <Route exact path="/" component={EventIndex}/>
        <Route exact path="/events" component={EventIndex}/>
      </Switch>
    </BrowserRouter>
  </Provider>,

  document.getElementById('root')
);

