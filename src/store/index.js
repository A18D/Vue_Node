import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer';
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import history from '../history';
import randomId from '../middlewares/randomId';
import {logger, crashReporter} from '../middlewares/logger';

import DevTools from '../components/DevTools';

const enhancer = applyMiddleware (
  thunk,
  routerMiddleware (history),
  randomId,
  logger,
  crashReporter
);

let storeRedux;

if (__DEV__) {
  storeRedux = createStore (
    reducer,
    {},
    compose (enhancer, DevTools.instrument())
  );
} else {
  storeRedux = createStore (reducer, {}, enhancer);
}

//dev only
window.storeRedux = storeRedux;
export default storeRedux;
