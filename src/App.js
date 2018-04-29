import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';


import HomePage from "./components/pages/HomePage";
import GroupPage from "./components/admin/pages/GroupPage";
import AdminPage from "./components/admin/pages/AdminPage";
import StudentPage from "./components/admin/pages/StudentPage";
import TeacherPage from "./components/admin/pages/TeacherPage";

import AdminRoute from "./components/routes/AdminRoute";


import Notifications from 'react-notify-toast';
import header from './components/layout/header';



const App = ({ location}) =>(
    <div className="page-container">
        <header />

        <Route path="/" exact component={HomePage} />
        <Route path="/admin" exact component={AdminPage} />

        <AdminRoute path="/admin/groups" location={location} exact component={GroupPage} />
        <AdminRoute path="/admin/students" location={location} exact component={StudentPage} />
        <AdminRoute path="/admin/teachers" location={location} exact component={TeacherPage} />
        <Notifications />
    </div>
);


App.propTypes = {
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;
