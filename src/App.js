import React from 'react';

import { Route } from 'react-router-dom';

import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import DashboardPage from "./components/pages/DashboardPage";
import AdminForm from "./components/admin/pages/AdminPage";

import Footer from "./components/Footer";

import UserRoute from "./components/routes/UserRoute";
import GuestRoute from "./components/routes/GuestRoute";



class App extends React.Component {
  render() {
    return (
        <div className="page-container">
            <Route path="/" exact component={HomePage} />

            <Route path="/admin" exact component={AdminForm} />

            {/*<GuestRoute path="/login" exact component={LoginPage} />*/}
            {/*<UserRoute path="/dashboard" exact component={DashboardPage} />*/}

            <Footer />
        </div>

    );
  }
}

export default App;
