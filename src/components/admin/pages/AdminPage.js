import React from 'react';
import AdminForm from '../forms/AdminForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { adminLogin } from '../../../actions/adminAuth';


class AdminPage extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = data =>
        this.props.adminLogin(data).then(() => this.props.history.push('/'));

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" alt="" className="login-page__img"/>
                        <span className="login-page__title">Вхід в систему</span>
                        <AdminForm submit={this.submit} />
                    </div>
                </div>
            </div>
        );
    }
}


AdminPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    adminLogin: PropTypes.func.isRequired
};


export default connect(null, {adminLogin})(AdminPage);
