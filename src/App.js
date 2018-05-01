import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomePage from "./components/pages/HomePage";

/* admin pages*/
import AdminPage from "./components/admin/pages/AdminPage";
import GroupPage from "./components/admin/pages/GroupPage";
import StudentPage from "./components/admin/pages/StudentPage";
import TeacherPage from "./components/admin/pages/TeacherPage";

/* student pages*/
import StudentAuth from "./components/student/pages/StudentAuth";
import StudentPanel from "./components/student/pages/StudentPanel";

/*Routes*/
import AdminRoute from "./components/routes/AdminRoute";
import StudentRoute from "./components/routes/StudentRoute";
/*Notifications*/
import Notifications from 'react-notify-toast';
import Header from './components/layout/Header';



const App = ({ location}) =>(
    <div className="page-container">
        <Header />

        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />
        <Route path="/student" exact component={StudentAuth} />

        <AdminRoute path="/admin/groups" location={location} exact component={GroupPage} />
        <AdminRoute path="/admin/students" location={location} exact component={StudentPage} />
        <AdminRoute path="/admin/teachers" location={location} exact component={TeacherPage} />


        <StudentRoute path="/student/panel" location={location} exact component={StudentPanel} />




        <Notifications />
    </div>
);


App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
