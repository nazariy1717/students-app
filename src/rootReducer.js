import { combineReducers } from 'redux';


import admin from './reducers/admin';
import student from './reducers/student';
import teacher from './reducers/teacher';

export default combineReducers({
    admin,
    student,
    teacher
});