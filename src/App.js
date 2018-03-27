import React from 'react';
import Login from "./pages/Login";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
        <div>
            <Login />

            <Footer />
        </div>

    );
  }
}

export default App;
