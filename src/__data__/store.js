import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import employeesReducer from './reducers/employeesReducer';
import filtersReducer from './reducers/filtersReducer';

let reducers = combineReducers({
    employees: employeesReducer,
    filters: filtersReducer
});

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;