import React from 'react';


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
    }

    onChange(e){
        this.setState({
            data: { ...this.state.data, [e.target.name]: e.target.value }
        })
    }

    onSubmit(){

    }

    render() {

        const { data } = this.state;

        return (

            <form action="/" id="" onSubmit={this.onSubmit}>
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
                </div>
                <button type="submit" className="ui primary large fluid button">Увійти</button>
            </form>

        );
    }
}

export default LoginForm;