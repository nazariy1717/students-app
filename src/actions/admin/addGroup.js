
import api from '../../api';

export const addGroup = data => dispatch =>
    api.admin.addGroup(data).then(res =>{
        console.log(res);
    });