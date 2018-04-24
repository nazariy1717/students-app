import { ADMIN_LOGGED_IN,ADMIN_LOGGED_OUT } from '../types'


export default  function user( state = {},action = {}) {
    switch (action.type){
        case ADMIN_LOGGED_IN:
            return action.user;
        case ADMIN_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}