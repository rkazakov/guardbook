import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import guards from './guards';

const rootReducer = combineReducers({ guards, routing: routerReducer });

export default rootReducer;
