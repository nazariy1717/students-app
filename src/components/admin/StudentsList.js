import React from 'react';
import PropTypes from 'prop-types';

class StudentsList extends React.Component {

    constructor(props) {
        super(props);
        this.removeStudent = this.removeStudent.bind(this);
    }

    removeStudent(id){
        this.props.removeStudent(id);
    }


    render() {
        return (
            <ul className="student__list">
                <li className="student__list-head row m-row">
                    <div className="column col-lg-4"><span>Ім'я:</span></div>
                    <div className="column col-lg-2"><span>Логін:</span></div>
                    <div className="column col-lg-3"><span>Пароль:</span></div>
                    <div className="column col-lg-3"><span>ID групи:</span></div>
                </li>
                {this.props.students.slice(0).reverse().map((student, i) => (
                    <li key={i} className="student__list-item row m-row">
                        <div className="column col-lg-4">
                            <span>{student.name}</span>
                        </div>
                        <div className="column col-lg-2">
                            <span>{student.login}</span>
                        </div>
                        <div className="column col-lg-3">
                            <span>{student.password}</span>
                        </div>
                        <div className="column col-lg-3">
                            <span>{student.groupId}</span>
                        </div>
                        <button onClick={this.removeStudent.bind(this, student)}
                            className="student__list-remove">Видалити</button>
                    </li>
                ))}
            </ul>
        );
    }
}



StudentsList.propTypes = {
    removeStudent: PropTypes.func.isRequired,
    students: PropTypes.array.isRequired
};


export default StudentsList;
