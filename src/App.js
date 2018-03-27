import React from 'react';
import Login from "./pages/Login";

class App extends React.Component {
  render() {
    return (
        <div>
            <div className="">
                <h1 className="ui block header">Система обліку успрішності студентів</h1>
            </div>
            <Login />
        </div>

    );
  }
}

export default App;
