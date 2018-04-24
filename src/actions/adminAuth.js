
import { ADMIN_LOGGED_IN,ADMIN_LOGGED_OUT } from '../types'
import api from '../api';

export const adminLoggedIn = (admin) => ({
    type: ADMIN_LOGGED_IN,
    admin
});

export const adminLoggedOut = () => ({
    type: ADMIN_LOGGED_OUT
});


export const login = credentials => dispatch =>
    api.admin.login(credentials).then(admin =>{
        localStorage.studentsJWT = admin.token;
        dispatch(adminLoggedIn(admin));
    });


export const logout = () => dispatch => {
    localStorage.removeItem('studentsJWT');
    dispatch(adminLoggedOut());
};
