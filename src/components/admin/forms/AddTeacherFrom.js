import React from 'react';
import PropTypes from 'prop-types';

import InlineError from '../../messages/InlineError';


class AddTeacherForm extends React.Component {

    state = {
        data: {
            login: '',
            password: '',
            name: '',
        },
        errors: []
    };

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    onChange(e){
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }

    onSubmit(e){
        e.preventDefault();
    }

    validate(data){
        const errors = {};
        if(!data.login){ errors.login = "Поле не може бути пустим!"; }
        if(!data.password){ errors.password = "Поле не може бути пустим!"; }
        if(!data.name){ errors.name = "Поле не може бути пустим!"; }
        return errors;
    }

    render() {

        const { data, errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="form__group">
                    <label htmlFor="login" className="form__label">ПІБ:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="form__input"
                        placeholder="ПІБ"
                        value={data.name}
                        onChange={this.onChange}
                    />
                    { errors.name && <InlineError text={errors.name}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="login" className="form__label">Логін:</label>
                    <input
                        type="text"
                        id="login"
                        name="login"
                        className="form__input"
                        placeholder="Логін"
                        value={data.login}
                        onChange={this.onChange}
                    />
                    { errors.login && <InlineError text={errors.login}/> }
                </div>
                <div className="form__group">
                    <label htmlFor="password" className="form__label">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="form__input"
                        placeholder="Пароль"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    { errors.password && <InlineError text={errors.password}/> }
                </div>


                <div className="form__group">
                    <button type="submit" className="btn --blue">Добавити</button>
                </div>

            </form>
        );
    }
}

AddTeacherForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddTeacherForm;