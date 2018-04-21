import React from 'react';
import Validator from 'validator';
import PropTypes from 'prop-types';

import InlineError from '../messages/InlineError';
import Notify from '../messages/Notify';


class LoginForm extends React.Component {

    state = {
        data: {
            email: '',
            password: ''
        },
        loading: false,
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
        const errors = this.validate(this.state.data);
        this.setState({ errors });

        if(Object.keys(errors).length === 0){
            this.props
                .submit(this.state.data)
                .catch(err => {
                    console.log(err.response);
                    this.setState({ errors: err.response.data.errors })
                });
        }
    }

    validate(data){
        const errors = {};
        if(!Validator.isEmail(data.email)){
            errors.email = 'Email невірний';
        }
        if(!data.password){
            errors.password = "Обовязкове поле";
        }
        return errors;
    }

    render() {

        const { data, errors } = this.state;

        return (

            <form onSubmit={this.onSubmit}>
                { errors.global && <Notify text={errors.global}/> }
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={data.email}
                        onChange={this.onChange}
                    />
                    { errors.email && <InlineError text={errors.email}/> }
                </div>
                <div className="form-group">
                    <label htmlFor="password">Пароль:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Пароль:"
                        value={data.password}
                        onChange={this.onChange}
                    />
                    { errors.password && <InlineError text={errors.password}/>}
                </div>
                <button type="submit" className="ui primary large fluid button">Увійти</button>
            </form>

        );
    }
}

LoginForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default LoginForm;