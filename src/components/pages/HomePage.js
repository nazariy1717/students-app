import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { adminLogout } from '../../actions/adminAuth';


const HomePage = ({ isAdminAuthenticated, adminLogout }) => (

    <div className="container">
        <h1>Home page</h1>
        { isAdminAuthenticated ? <button onClick={ () => adminLogout()}>Вийти</button> : ''}

    </div>

);

HomePage.protoTypes = {
    isAdminAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        isAdminAuthenticated: !!state.admin.token
    }

}

export default connect(mapStateToProps, {adminLogout})(HomePage);
