import React from 'react';
import PropTypes from 'prop-types';

import InlineError from '../../messages/InlineError';


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
        this.setState({ errors: errors });
        if(Object.keys(errors).length === 0){
            this.props.submit(this.state.data);
        }
        this.setState({ data: {groupName: ''} });
    }

    validate(data){
        const errors = {};
        if(!data.groupName){
            errors.name = "Поле не може бути пустим!";
        }
        return errors;
    }

    render() {

        const { data, errors } = this.state;

        return (
            <form onSubmit={this.onSubmit}>
                <div className="row m-row align-middle">
                    <div className="column col-lg-6">
                        <input
                            type="text"
                            id="groupName"
                            name="groupName"
                            className="form__input"
                            placeholder="Назва групи"
                            value={data.groupName}
                            onChange={this.onChange}
                        />
                        { errors.name && <InlineError text={errors.name}/> }
                    </div>
                    <div className="column col-lg-6">
                        <button type="submit" className="btn --blue">Добавити</button>
                    </div>
                </div>
            </form>
        );
    }
}

AddGroupForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default AddGroupForm;