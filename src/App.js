import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from "./components/pages/HomePage";

import DashboardPage from "./components/admin/pages/DashboardPage";
import AdminForm from "./components/admin/pages/AdminPage";

import Footer from "./components/Footer";

import AdminRoute from "./components/routes/AdminRoute";



class App extends React.Component {
  render() {
    return (
        <div className="page-container">

            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={AdminForm} />

            <AdminRoute path="/admin/dashboard" exact component={DashboardPage} />

            <Footer />
        </div>

    );
  }
}

export default App;
