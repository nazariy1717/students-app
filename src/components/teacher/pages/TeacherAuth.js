import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import TeacherForm from '../forms/TeacherForm';
import { teacherLogin } from '../../../actions/teacher/teacherAuth';



class TeacherAuth extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = data =>
        this.props.teacherLogin(data).then(() =>
            this.props.history.push('/teacher/panel'));

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" alt="" className="login-page__img"/>
                        <span className="login-page__title">Вхід в систему(Викладач)</span>
                        <TeacherForm submit={this.submit} />
                    </div>
                </div>
            </div>
        );
    }
}


TeacherAuth.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    teacherLogin: PropTypes.func.isRequired
};


export default connect(null, {teacherLogin})(TeacherAuth);
