import React from 'react';
import PropTypes from 'prop-types';
import { Route,Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const StudentRoute = ({ isStudentAuthenticated, component: Component, ...rest}) => (
    <Route {...rest}  render={ props=> isStudentAuthenticated ?  <Component {...props} /> : <Redirect to="/"/>}/>
);

StudentRoute.propTypes = {
    component: PropTypes.func.isRequired,
    isStudentAuthenticated: PropTypes.bool.isRequired
};


function mapStateToProps(state){
    return {
        isStudentAuthenticated: !!state.student.token
    }
}


export default connect(mapStateToProps)(StudentRoute);