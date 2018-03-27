import React from 'react';



class Login extends React.Component {

    login (){

    }

    render() {
        return (
            <div className="ui center aligned middle aligned grid"  >
                <div className="six wide column ">
                    <h2 className="ui center aligned header">Вхід в систему</h2>
                    <form action="/" className="ui large form">
                        <div className="ui stacked segment">
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
        );
    }
}

export default Login;
