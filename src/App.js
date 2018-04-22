import React from 'react';

import { Route } from 'react-router-dom';


import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
        <div className="page-container">
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />

            <Footer />
        </div>

    );
  }
}

export default App;
