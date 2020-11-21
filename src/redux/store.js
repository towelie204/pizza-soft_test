import { combineReducers, createStore } from 'redux';
import employeesReducer from './employees-reducer';
import profileReducer from './profile-reducer';

let reducers = combineReducers({
    employeesList: employeesReducer,
    profilePage: profileReducer
});

let store = createStore(reducers);

window.store = store;

export default store;