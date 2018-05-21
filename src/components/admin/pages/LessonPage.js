import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';
import api from '../../../api';

import Sidebar from '../Sidebar';
import AddLessonForm from '../forms/AddLessonForm';
import { addLesson } from '../../../actions/admin/addLesson';


class LessonPage extends React.Component{

    state = {
        lessons: [],
        lessonsFiltered: [],
        errors: [],
    };

    constructor(props){
        super(props);
        this.submit = this.submit.bind(this);
    }

    getLesson(){
        api.admin.getLesson()
            .then(res => this.setState({ lessons: res.studentsMap, lessonsFiltered: res.studentsMap}))
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
            .catch(err => notify.show(err.response.data.errors.login, 'error'));

    };

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
                                    </div>
                                </div>
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

