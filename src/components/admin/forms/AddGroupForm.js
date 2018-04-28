import React from 'react';
import PropTypes from 'prop-types';

import InlineError from '../../messages/InlineError';
import Notify from '../../messages/Notify';


class AddGroupForm extends React.Component {

    state = {
        data: {
            groupName: '',
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
        const errors = this.validate(this.state.data);
        this.setState({
            data: {
                groupName: ''
            },
            errors: errors
        });
        if(Object.keys(errors).length === 0){
            this.props
                .submit(this.state.data)
                .catch(err => {
                    console.log(err);
                    this.setState({ errors: err.data.errors })
                });
        }
    }

    validate(data){
        const errors = {};
        if(!data.groupName){
            errors.groupName = "Поле не може бути пустим!";
        }
        return errors;
    }

    render() {

        const { data, errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                { errors.global && <Notify text={errors.global}/> }
                <div className="form__group">
                    <label htmlFor="groupName" className="form__label">Назва групи:</label>
                    <input
                        type="text"
                        id="groupName"
                        name="groupName"
                        className="form__input"
                        placeholder="Назва групи"
                        value={data.groupName}
                        onChange={this.onChange}
                    />
                    { errors.groupName && <InlineError text={errors.groupName}/> }
                </div>
                <button type="submit" className="btn --blue">Добавити</button>
            </form>

        );
    }
}

AddGroupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddGroupForm;