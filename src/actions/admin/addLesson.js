import { ADMIN_ADDED_LESSON } from '../../types'

import api from '../../api';

export const adminAddedLesson = () => ({
    type: ADMIN_ADDED_LESSON,
});

export const addLesson = data => dispatch =>
    api.admin.addLesson(data).then(
        dispatch(adminAddedLesson())
    );