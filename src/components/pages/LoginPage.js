import React from 'react';
import LoginForm from '../forms/LoginForm';

class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(data){
        console.log(data);
    }

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" alt=""/>
                        <h2 className="ui center aligned header">Вхід в систему</h2>

                        <LoginForm submit={this.submit} />

                    </div>
                </div>
            </div>

        );
    }
}

export default LoginPage;
