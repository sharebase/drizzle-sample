import { connect } from 'react-redux';
import logger from 'redux-logger';
import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {routeReducer,reuterMiddleware} from 'react-router-redux'

import * as reducers from './reducers'