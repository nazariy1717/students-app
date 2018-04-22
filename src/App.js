import React from 'react';

import { Route } from 'react-router-dom';


import LoginPage from "./components/pages/LoginPage";
import HomePage from "./components/pages/HomePage";

import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div className="ui container">
            <Route path="/" exact component={HomePage} />
            <Route path="/login" exact component={LoginPage} />


            <Footer />
        </div>

    );
  }
}

export default App;
