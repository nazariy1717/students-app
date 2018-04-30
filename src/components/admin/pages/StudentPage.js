import React from 'react';
import PropTypes from 'prop-types';

import Sidebar from '../Sidebar';
import AddStudentForm from '../forms/AddStudentForm';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';

import { addStudent } from '../../../actions/admin/addStudent';


class StudentsPage extends React.Component{


    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit = data => {
        this.props.addStudent(data)
            .then(response => notify.show(`Студента успішно добавлено!`, 'success'))
            .catch(err => notify.show(err.response.data.errors.login, 'error'));

    };


    render(){
        return(
            <div className="page">
                <div className="page__sidebar">
                    <Sidebar />
                </div>
                <div className="page__content">
                    <h1 className="page__title">Управління студентами</h1>
                    <div className="row m-row">
                        <div className="column col-lg-6">
                            <span className="page__subtitle --modifier">Новий студент</span>
                            <AddStudentForm submit={this.submit} />
                        </div>
                        <div className="column col-lg-6">
                            <span className="page__subtitle --modifier">Останні добавлені</span>
                            <div></div>
                            <span>Показати всі</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

StudentsPage.propTypes = {
    addStudent: PropTypes.func.isRequired
};

export default connect(null, {addStudent})(StudentsPage);

