import axios from 'axios';

export default {
    admin: {
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data.admin),
        addGroup: (data) => axios.post('/api/addGroup',{data}).then(res => res.data.success),
    },
    user: {
        login: (credentials) => axios.post('/api/auth',{credentials}).then(res => res.data.user)
    }
}