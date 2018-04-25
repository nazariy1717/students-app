import React from 'react';
import { Route } from 'react-router-dom';

import HomePage from "./components/pages/HomePage";

import GroupPage from "./components/admin/pages/GroupPage";
import AdminForm from "./components/admin/pages/AdminPage";


import AdminRoute from "./components/routes/AdminRoute";



class App extends React.Component {
  render() {
    return (
        <div className="page-container">

            <Route path="/" exact component={HomePage} />
            <Route path="/admin" exact component={AdminForm} />

            <AdminRoute path="/admin/groups" exact component={GroupPage} />

        </div>

    );
  }
}

export default App;
