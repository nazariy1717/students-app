import axios from 'axios';

export default {
    admin: {
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data.admin),
        addGroup: (data) => axios.post('/api/addGroup',{data}).then(res => res.data),
        getGroup: () => axios.get('/api/getGroup').then(res => res.data),
        removeGroup: (group) => axios.post('/api/removeGroup',{group}).then(res => res.data),
    },
    user: {
        login: (credentials) => axios.post('/api/auth',{credentials}).then(res => res.data.user)
    }
}