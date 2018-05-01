import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import StudentForm from '../forms/StudentForm';
import { studentLogin } from '../../../actions/student/studentAuth';



class StudentAuth extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = data =>
        this.props.studentLogin(data).then(() =>
            this.props.history.push('/student/panel'));

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" alt="" className="login-page__img"/>
                        <span className="login-page__title">Вхід в систему(Студент)</span>
                        <StudentForm submit={this.submit} />
                    </div>
                </div>
            </div>
        );
    }
}


StudentAuth.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    studentLogin: PropTypes.func.isRequired
};


export default connect(null, {studentLogin})(StudentAuth);
