import React from 'react';
import PropTypes from 'prop-types';

class TeachersList extends React.Component {

    constructor(props) {
        super(props);
        this.removeTeacher = this.removeTeacher.bind(this);
    }

    removeTeacher(id){
        this.props.removeTeacher(id);
    }


    render() {
        return (
            <ul className="student__list">
                <li className="student__list-head row m-row">
                    <div className="column col-lg-4"><span>Ім'я:</span></div>
                    <div className="column col-lg-4"><span>Логін:</span></div>
                    <div className="column col-lg-4"><span>Пароль:</span></div>
                </li>
                {this.props.teachers.slice(0).reverse().map((teacher, i) => (
                    <li key={i} className="student__list-item row m-row">
                        <div className="column col-lg-4">
                            <span>{teacher.name}</span>
                        </div>
                        <div className="column col-lg-4">
                            <span>{teacher.login}</span>
                        </div>
                        <div className="column col-lg-4">
                            <span>{teacher.password}</span>
                        </div>

                        <button onClick={this.removeTeacher.bind(this, teacher)}
                                className="student__list-remove">Видалити</button>
                    </li>
                ))}
            </ul>
        );
    }
}



TeachersList.propTypes = {
    removeTeacher: PropTypes.func.isRequired,
    teachers: PropTypes.array.isRequired
};


export default TeachersList;
