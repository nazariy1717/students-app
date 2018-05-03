import React from 'react';
import PropTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const TeacherRoute = ({ isTeacherAuthenticated, component: Component, ...rest}) => (
    <Route {...rest}  render={ props=> isTeacherAuthenticated ?  <Component {...props} /> : <Redirect to="/"/>}/>
);

TeacherRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isTeacherAuthenticated: PropTypes.bool.isRequired
};


function mapStateToProps(state){
    return {
        isTeacherAuthenticated: !!state.teacher.token
    }
}


export default connect(mapStateToProps)(TeacherRoute);