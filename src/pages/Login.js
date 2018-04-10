import React from 'react';



class Login extends React.Component {

    constructor(props){
        super(props);
        this.login = this.login.bind(this);
    }

    login (){

    }

    render() {
        return (
            <div className="login-page">
                <div className="login-page__cell">
                    <div className="login-page__content">

                        <form action="/" className="ui large form">
                            <div className="ui stacked segment login-page__block">

                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Nulp_logo_ukr.jpg/280px-Nulp_logo_ukr.jpg" className="ui small centered image" alt=""/>

                                <h2 className="ui center aligned header">Вхід в систему</h2>

                                <div className="field">
                                    <div className="ui fluid left icon input">
                                        <input type="text" placeholder="Enter your login" />
                                        <i className="user icon" />
                                    </div>
                                </div>
                                <button type="submit" className="ui primary large fluid button" onSubmit={this.login}>Увійти</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

export default Login;
