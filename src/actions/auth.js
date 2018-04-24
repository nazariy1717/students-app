
import { ADMIN_LOGGED_IN, ADMIN_LOGGED_OUT } from '../types'
import api from '../api';

export const userLoggedIn = (user) => ({
    type: ADMIN_LOGGED_IN,
    user
});

export const userLoggedOut = () => ({
    type: ADMIN_LOGGED_OUT
});

export const login = credentials => dispatch =>
    api.user.login(credentials).then(user =>{
        localStorage.studentsJWT = user.token;
        dispatch(userLoggedIn(user));
    });


export const logout = () => dispatch => {
    localStorage.removeItem('studentsJWT');
    dispatch(userLoggedOut());
};
