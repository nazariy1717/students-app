import axios from 'axios';

export default {
    admin: {
        login: (credentials) => axios.post('/api/admin-auth',{credentials}).then(res => res.data.admin),

        /* Group */
        addGroup: (data) => axios.post('/api/addGroup',{data}).then(res => res.data),
        getGroup: () => axios.get('/api/getGroup').then(res => res.data),
        removeGroup: (group) => axios.post('/api/removeGroup',{group}).then(res => res.data),

        /* Student */
        addStudent: (student) => axios.post('/api/addStudent',{student}).then(res => res.data),
        getStudents: () => axios.get('/api/getStudents').then(res => res.data),
        removeStudent: (student) => axios.post('/api/removeStudent',{student}).then(res => res.data)



    },
    user: {
        login: (credentials) => axios.post('/api/auth',{credentials}).then(res => res.data.user)
    }
}