import React from 'react';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { login } from '../../actions/auth';


class LoginPage extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = data =>
        this.props.login(data).then(() => this.props.history.push('/'));


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


LoginPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login: PropTypes.func.isRequired

};


export default connect(null, {login})(LoginPage);
