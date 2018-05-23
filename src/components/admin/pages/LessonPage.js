import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import api from '../../../api';

import Sidebar from '../Sidebar';
import AddLessonForm from '../forms/AddLessonForm';
import { addLesson } from '../../../actions/admin/addLesson';

import LessonsList from '../LessonsList';



class LessonPage extends React.Component{

    state = {
        lessons: [],
        lessonsFiltered: [],
        errors: [],
    };

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
        this.getLesson = this.getLesson.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.removeLesson = this.removeLesson.bind(this);
    }

    getLesson(){
        api.admin.getLesson()
            .then(res => this.setState({ lessons: res.lessonsMap, lessonsFiltered: res.lessonsMap}))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    componentDidMount () {
        this.getLesson();
    }

    submit = data => {

        console.log(data);

        this.props.addLesson(data)
            .then(res => {
                notify.show(`Пару успішно добавлено!`, 'success');
                console.log(res);
                let newItem =  {
                    name: res.response.name,
                    teacher: res.response.teacher,
                    group: res.response.group,
                    number: res.response.number,
                    day: res.response.day,
                };
                this.setState({
                    lessons: [...this.state.lessons, newItem],
                    lessonsFiltered: [...this.state.lessonsFiltered, newItem],
                    errors: ''
                });
            })
            .catch(err => {
                console.log(err);
                // notify.show(err.response.data.errors, 'error');
            });

    };

    handleSearch(event){
        const displayedLessons =  this.state.lessons.filter( el => {
            return el.name.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1;
        });
        if(displayedLessons.length === 0){
            this.setState({ errors: 'Не знайдено жодної пари' });
        } else{
            this.setState({ errors: '' });
        }
        this.setState({ lessonsFiltered: [...displayedLessons]});
    }

    removeLesson(lesson){
        const newLessonsList = this.state.lessons.filter(item =>{
            return item!== lesson;
        });
        this.setState({ lessons: [...newLessonsList],lessonsFiltered: [...newLessonsList] });

        if(newLessonsList.length === 0){
            this.setState({errors: 'Не знайдено жодної пари'});
        }
        api.admin.removeLesson(lesson)
            .then(res => notify.show('Пару видалено!', 'success' ))
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
                    <h1 className="page__title">Управління парами</h1>
                    <div className="row m-row">
                        <div className="column col-xs-12">
                            <span className="page__subtitle --modifier">Добавити пару</span>
                            <AddLessonForm submit={this.submit} />
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
                                <LessonsList lessons={this.state.lessonsFiltered} removeLesson={this.removeLesson.bind(this)}/>
                                { errors && <div style={{ color: '#ae5856' }}>{errors}</div> }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

LessonPage.propTypes = {
    addLesson: PropTypes.func.isRequired
};

export default connect(null, {addLesson})(LessonPage);

