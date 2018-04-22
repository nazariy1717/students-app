import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';


const HomePage = ({ isAuthenticated, logout }) => (

    <div className="">
        <h1>Home page</h1>
        { isAuthenticated ? <button onClick={ () => logout()}>Вийти</button> : <Link to="/login">Увійти</Link>}

    </div>

);

HomePage.protoTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        isAuthenticated: !!state.user.token
    }

}

export default connect(mapStateToProps, {logout})(HomePage);
