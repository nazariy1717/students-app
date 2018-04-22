import React from 'react';

import { Link } from 'react-router-dom';


class HomePage extends React.Component {
    render() {
        return (
            <div className="">
                <Link to="/login">Увійти</Link>
            </div>

        );
    }
}

export default HomePage;
