import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import api from '../../../api';

import Sidebar from '../Sidebar';
import AddStudentForm from '../forms/AddStudentForm';
import { addStudent } from '../../../actions/admin/addStudent';
import StudentsList from '../StudentsList';

class StudentsPage extends React.Component{

    state = {
        students: [],
        studentsFiltered: [],
        errors: [],
    };

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.removeStudent = this.removeStudent.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.getStudents = this.getStudents.bind(this);
    }

    getStudents(){
        api.admin.getStudents()
            .then(res => this.setState({ students: res.studentsMap, studentsFiltered: res.studentsMap}))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    componentDidMount () {
        this.getStudents();
    }



    submit = data => {
        let exist = 0;
        this.state.students.forEach(function(val,index){
            if(val.login === data.login){
                exist = 1;
            }
        });
        console.log(data);

        if(!exist){
            this.props.addStudent(data)
                .then(res => {
                    notify.show(`Студента успішно добавлено!`, 'success');
                    console.log(res);
                    let newItem =  {
                        groupId: res.response.groupId,
                        login: res.response.login,
                        name: res.response.name,
                        password: res.response.password,
                    };
                    this.setState({
                        students: [...this.state.students, newItem],
                        studentsFiltered: [...this.state.studentsFiltered, newItem],
                        errors: ''
                    });
                })
                .catch(err => notify.show(err.response.data.errors.login, 'error'));
        } else{
            notify.show('Студент з таким логіном вже існує!', 'error');
        }
    };

    handleSearch(event){
        const displayedStudents =  this.state.students.filter( el => {
            return el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        if(displayedStudents.length === 0){
            this.setState({ errors: 'Не знайдено жодного студента' });
        } else{
            this.setState({ errors: '' });
        }
        this.setState({ studentsFiltered: [...displayedStudents]});
    }

    removeStudent(student){
        const newStudentsList = this.state.students.filter(item =>{
            return item!== student;
        });
        this.setState({ students: [...newStudentsList],studentsFiltered: [...newStudentsList] });

        if(newStudentsList.length === 0){
            this.setState({errors: 'Не знайдено жодного студента'});
        }
        api.admin.removeStudent(student)
            .then(res => notify.show('Студента видалено!', 'success' ))
            .catch(err => console.log(err));
    }



    render(){
        const { errors } = this.state;
        return(
            <div className="page">
                <div className="page__sidebar">
                    <Sidebar />
                </div>
                <div className="page__content">
                    <h1 className="page__title">Управління студентами</h1>
                    <div className="row m-row">
                        <div className="column col-xs-12">
                            <span className="page__subtitle --modifier">Новий студент</span>
                            <AddStudentForm submit={this.submit} />
                        </div>
                        <div className="column col-xs-12">
                            <div className="student">
                                <div className="row m-row align-middle form__group">
                                    <div className="column">
                                        <span className="page__subtitle ">Пошук</span>
                                    </div>
                                    <div className="column">
                                        <input type="text" className="student__search form__input" onChange={this.handleSearch.bind(this)}/>
                                    </div>
                                </div>
                                <StudentsList students={this.state.studentsFiltered} removeStudent={this.removeStudent.bind(this)}/>
                                { errors && <div style={{ color: '#ae5856' }}>{errors}</div> }
                            </div>
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

