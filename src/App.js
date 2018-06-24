import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from "./components/pages/HomePage";

/* admin pages*/
import AdminPage from "./components/admin/pages/AdminPage";
import GroupPage from "./components/admin/pages/GroupPage";
import StudentPage from "./components/admin/pages/StudentPage";
import TeacherPage from "./components/admin/pages/TeacherPage";
import LessonPage from "./components/admin/pages/LessonPage";

/* student pages*/
import StudentAuth from "./components/student/pages/StudentAuth";
import StudentPanel from "./components/student/pages/StudentPanel";
import StudentLesson from "./components/student/pages/StudentLesson";

/* teacher pages*/
import TeacherAuth from "./components/teacher/pages/TeacherAuth";
import TeacherPanel from "./components/teacher/pages/TeacherPanel";
import TeacherLesson from "./components/teacher/pages/TeacherLesson";

/*Routes*/
import AdminRoute from "./components/routes/AdminRoute";
import StudentRoute from "./components/routes/StudentRoute";
import TeacherRoute from "./components/routes/TeacherRoute";

/*Notifications*/
import Notifications from 'react-notify-toast';
import Header from './components/layout/Header';



const App = ({ location}) =>(
    <div className="page-container">
        <Header />

        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/student" exact component={StudentAuth} />
        <Route path="/teacher" exact component={TeacherAuth} />


        <AdminRoute path="/admin/groups" location={location} exact component={GroupPage} />
        <AdminRoute path="/admin/students" location={location} exact component={StudentPage} />
        <AdminRoute path="/admin/teachers" location={location} exact component={TeacherPage} />
        <AdminRoute path="/admin/lessons" location={location} exact component={LessonPage} />


        <StudentRoute path="/student/panel" location={location} exact component={StudentPanel} />
        <StudentRoute path="/student/lesson_2" location={location} exact component={StudentLesson} />


        <TeacherRoute path="/teacher/panel" location={location} exact component={TeacherPanel} />
        <TeacherRoute path="/teacher/lesson_2" location={location} exact component={TeacherLesson} />



        <Notifications />
    </div>
);


App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
