
import { STUDENT_LOGGED_IN, STUDENT_LOGGED_OUT } from '../../types'
import api from '../../api';

export const studentLoggedIn = (student) => ({
    type: STUDENT_LOGGED_IN,
    student
});

export const studentLoggedOut = () => ({
    type: STUDENT_LOGGED_OUT
});


export const studentLogin = credentials => dispatch =>
    api.student.login(credentials).then(res =>{
        console.log(res);
        localStorage.studentJWT = res.student.token;
        localStorage.name = res.name;
        dispatch(studentLoggedIn(res.student));
    });


export const studentLogout = () => dispatch => {
    localStorage.removeItem('studentJWT');
    localStorage.removeItem('name');
    dispatch(studentLoggedOut());
};
