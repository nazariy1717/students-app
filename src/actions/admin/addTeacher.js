import { ADMIN_ADDED_TEACHER } from '../../types'

import api from '../../api';

export const adminAddedTeacher = () => ({
    type: ADMIN_ADDED_TEACHER,
});

export const addTeacher = data => dispatch =>
    api.admin.addTeacher(data).then(
        dispatch(adminAddedTeacher())
    );