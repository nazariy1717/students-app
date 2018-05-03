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
        removeStudent: (student) => axios.post('/api/removeStudent',{student}).then(res => res.data),

        /* Teacher */
        addTeacher: (teacher) => axios.post('/api/addTeacher',{teacher}).then(res => res.data),
        getTeachers: () => axios.get('/api/getTeachers').then(res => res.data),
        removeTeacher: (teacher) => axios.post('/api/removeTeacher',{teacher}).then(res => res.data),

    },

    student: {
        login: (credentials) => axios.post('/api/student-auth',{credentials}).then(res => res.data)
    },

    teacher: {
        login: (credentials) => axios.post('/api/teacher-auth',{credentials}).then(res => res.data)
    },

    user: {
        login: (credentials) => axios.post('/api/auth',{credentials}).then(res => res.data.user)
    }
}