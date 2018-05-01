import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import api from '../../../api';
import { addTeacher } from '../../../actions/admin/addTeacher';

import Sidebar from '../Sidebar';
import AddTeacherForm from '../forms/AddTeacherFrom';
import TeachersList from '../TeachersList';


class TeacherPage extends React.Component{

    state = {
        teachers: [],
        teachersFiltered: [],
        errors: [],
    };

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.removeTeacher = this.removeTeacher.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount () {
        api.admin.getTeachers()
            .then(res => this.setState({ teachers: res.teachersMap, teachersFiltered: res.teachersMap}))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    submit = data => {
        let exist = 0;
        this.state.teachers.forEach(function(val,index){
            if(val.login === data.login){
                exist = 1;
            }
        });
        if(!exist){
            this.props.addTeacher(data)
                .then(res => {
                    notify.show(`Викладача успішно добавлено!`, 'success');
                    let newItem =  {
                        name: res.response.name,
                        login: res.response.login,
                        password: res.response.password
                    };
                    this.setState({
                        teachers: [...this.state.teachers, newItem],
                        teachersFiltered: [...this.state.teachersFiltered, newItem],
                        errors: ''
                    });
                })
                .catch(err => notify.show(err.response.data.errors.login, 'error'));
        } else{
            notify.show('Викладач з таким логіном вже існує!', 'error');
        }
    };

    handleSearch(event){
        const displayedTeachers =  this.state.teachers.filter( el => {
            return el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        if(displayedTeachers.length === 0){
            this.setState({ errors: 'Не знайдено жодного викладача' });
        } else{
            this.setState({ errors: '' });
        }
        this.setState({ teachersFiltered: [...displayedTeachers]});
    }

    removeTeacher(teacher){
        const newTeachersList = this.state.teachers.filter(item =>{
            return item!== teacher;
        });
        this.setState({ teachers: [...newTeachersList],teachersFiltered: [...newTeachersList] });

        if(newTeachersList.length === 0){
            this.setState({errors: 'Не знайдено жодного викладача'});
        }
        api.admin.removeTeacher(teacher)
            .then(res => notify.show('Викладача видалено!', 'success' ))
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
                    <h1 className="page__title">Управління викладачами</h1>
                    <div className="row m-row">
                        <div className="column col-xs-12">
                            <span className="page__subtitle --modifier">Новий викладач</span>
                            <AddTeacherForm submit={this.submit} />
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
                                <TeachersList teachers={this.state.teachersFiltered} removeTeacher={this.removeTeacher.bind(this)}/>
                                { errors && <div style={{ color: '#ae5856' }}>{errors}</div> }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


TeacherPage.propTypes = {
    addTeacher: PropTypes.func.isRequired
};

export default connect(null, {addTeacher})(TeacherPage);

