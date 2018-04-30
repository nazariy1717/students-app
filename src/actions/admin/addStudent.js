import { ADMIN_ADDED_STUDENT } from '../../types'

import api from '../../api';

export const adminAddedStudent = () => ({
    type: ADMIN_ADDED_STUDENT,
});

export const addStudent = data => dispatch =>
    api.admin.addStudent(data).then(
        dispatch(adminAddedStudent())
    );