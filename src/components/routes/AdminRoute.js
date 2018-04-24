import React from 'react';
import PropTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const AdminRoute = ({ isAdminAuthenticated, component: Component, ...rest}) => (
    <Route {...rest}  render={ props=> isAdminAuthenticated ?  <Component {...props} /> : <Redirect to="/"/>}/>
);

AdminRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isAdminAuthenticated: PropTypes.bool.isRequired
};


function mapStateToProps(state){
    return {
        isAdminAuthenticated: !!state.admin.token
    }
}


export default connect(mapStateToProps)(AdminRoute);