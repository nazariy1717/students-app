import { STUDENT_LOGGED_IN,STUDENT_LOGGED_OUT } from '../types'


export default  function student( state = {},action = {}) {
    switch (action.type){
        case STUDENT_LOGGED_IN:
            return action.student;
        case STUDENT_LOGGED_OUT:
            return {};
        default:
            return state;
    }
}