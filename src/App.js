import React from 'react';
import LoginPage from "./components/pages/LoginPage";
import Footer from "./components/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
        <div>
            <LoginPage />

            <Footer />
        </div>

    );
  }
}

export default App;
