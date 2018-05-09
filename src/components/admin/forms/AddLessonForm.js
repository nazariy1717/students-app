import React from 'react';
import PropTypes from 'prop-types';
import api from '../../../api';

import InlineError from '../../messages/InlineError';


class AddLessonForm extends React.Component {

    state = {
        data: {
            name: '',
            teacher: '',
            group: '',
            number: '',
            day: '',
        },
        teachers: [],
        groups: [],
        errors: []
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    getTeacher(){
        api.admin.getTeachers()
            .then(res => this.setState({ teachers: res.teachersMap }))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    getGroups(){
        api.admin.getGroup()
            .then(res => this.setState({ groups: res.groupsMap }))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    componentDidMount () {
        this.getGroups();
        this.getTeacher();
    }


    onChange(e){
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        });
    }

    onSubmit(e){
        e.preventDefault();
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data)
        }
        this.setState({
            data: {
                name: '',
                teacher: '',
                group: '',
                number: '',
                day: '',
            }
        });
    }

    validate(data){
        const errors = {};
        if(!data.name){ errors.name = "Поле не може бути пустим!"; }
        if(!data.teacher){ errors.teacher = "Поле не може бути пустим!"; }
        if(!data.group){ errors.group = "Поле не може бути пустим!"; }
        if(!data.number){ errors.number = "Поле не може бути пустим!"; }
        if(!data.day){ errors.day = "Поле не може бути пустим!"; }
        return errors;
    }

    render() {

        console.log(this.state.groups);
        const { data, errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form__group">
                    <label htmlFor="name" className="form__label">Назва пари:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form__input"
                        placeholder="Назва пари"
                        value={data.name}
                        onChange={this.onChange}
                    />
                    { errors.name && <InlineError text={errors.name}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="teacher" className="form__label">Викладач:</label>
                    <select
                        name="teacher"
                        id="teacher"
                        className="form__select"
                        value={data.groupId}
                        onChange={this.onChange}>
                        <option defaultValue="0">Виберіть викладача</option>
                        {this.state.teachers.map((teacher, i) => (
                            <option value={teacher.id} key={i}>{teacher.name}</option>
                        ))}
                    </select>
                    { errors.teacher && <InlineError text={errors.teacher}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="group" className="form__label">Група:</label>
                    <select
                        name="group"
                        id="group"
                        className="form__select"
                        value={data.group}
                        onChange={this.onChange}>
                        <option defaultValue="0">Виберіть групу</option>
                        {this.state.groups.map((group, i) => (
                            <option value={group.id} key={i}>{group.groupName}</option>
                        ))}
                    </select>
                    { errors.group && <InlineError text={errors.group}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="group" className="form__label">Номер пари:</label>
                    <select
                        name="number"
                        id="number"
                        className="form__select"
                        value={data.number}
                        onChange={this.onChange}>
                        <option defaultValue="0">Виберіть номер</option>
                        <option value="1">Перша пара</option>
                        <option value="2">Друга пара</option>
                        <option value="3">Третя пара</option>
                        <option value="4">Четверта пара</option>
                    </select>
                    { errors.number && <InlineError text={errors.number}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="group" className="form__label">День тижня:</label>
                    <select
                        name="day"
                        id="day"
                        className="form__select"
                        value={data.day}
                        onChange={this.onChange}>
                        <option defaultValue="0">Виберіть день</option>
                        <option value="1">Понеділок</option>
                        <option value="2">Вівторок</option>
                        <option value="3">Середа</option>
                        <option value="4">Четвер</option>
                        <option value="4">П'ятниця</option>
                    </select>
                    { errors.day && <InlineError text={errors.day}/> }
                </div>
                <div className="form__group">
                    <button type="submit" className="btn --blue">Добавити</button>
                </div>
            </form>
        );
    }
}

AddLessonForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddLessonForm;