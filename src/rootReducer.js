import { combineReducers } from 'redux';


import admin from './reducers/admin';
import student from './reducers/student';

export default combineReducers({
    admin,
    student
});