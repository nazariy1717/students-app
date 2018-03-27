import React from 'react';



class Login extends React.Component {
    render() {
        return (
            <div className="ui center aligned middle aligned grid">
                <div className="column">
                    <h2 className="ui teal center aligned header">Вхід в систему</h2>
                    <form action="" className="ui large form">
                        <div className="ui stacked segment">
                            <div className="field">
                                <input type="text"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;
