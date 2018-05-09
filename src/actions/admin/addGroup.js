import { ADMIN_ADDED_GROUP } from '../../types'

import api from '../../api';

export const adminAddedGroup = () => ({
    type: ADMIN_ADDED_GROUP,
});

export const addGroup = data => dispatch =>
    api.admin.addGroup(data).then(
        dispatch(adminAddedGroup())
    );