import { TEACHER_LOGGED_IN,TEACHER_LOGGED_OUT } from '../types'


export default  function teacher( state = {},action = {}) {
    switch (action.type){
        case TEACHER_LOGGED_IN:
            return action.teacher;
        case TEACHER_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}