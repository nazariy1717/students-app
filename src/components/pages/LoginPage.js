import React from 'react';
import LoginForm from '../forms/LoginForm';



class LoginPage extends React.Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login (){

    }

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">

                            <LoginForm />

                    </div>
                </div>
            </div>

        );
    }
}

export default LoginPage;
