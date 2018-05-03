
import { TEACHER_LOGGED_IN, TEACHER_LOGGED_OUT } from '../../types'
import api from '../../api';

export const teacherLoggedIn = (teacher) => ({
    type: TEACHER_LOGGED_IN,
    teacher
});

export const teacherLoggedOut = () => ({
    type: TEACHER_LOGGED_OUT
});


export const teacherLogin = credentials => dispatch =>
    api.teacher.login(credentials).then(res =>{
        console.log(res);
        localStorage.teacherJWT = res.teacher.token;
        localStorage.teacherName = res.name;
        dispatch(teacherLoggedIn(res.teacher));
    });


export const teacherLogout = () => dispatch => {
    localStorage.removeItem('teacherJWT');
    localStorage.removeItem('teacherName');
    dispatch(teacherLoggedOut());
};
