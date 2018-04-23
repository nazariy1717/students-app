import React from 'react';

import { Route } from 'react-router-dom';

import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";
import DashboardPage from "./components/pages/DashboardPage";

import Footer from "./components/Footer";

import UserRoute from "./components/routes/UserRoute";

class App extends React.Component {
  render() {
    return (
        <div className="page-container">
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />
            <UserRoute path="/dashboard" exact component={DashboardPage} />

            <Footer />
        </div>

    );
  }
}

export default App;
