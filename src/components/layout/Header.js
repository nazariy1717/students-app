import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { adminLogout } from '../../actions/admin/adminAuth';
import { studentLogout } from '../../actions/student/studentAuth';


const header = ({ isAdminAuthenticated, adminLogout,isStudentAuthenticated,studentLogout }) => (

    <div className="header">

        { isAdminAuthenticated ?<span className="header__txt">Ви увійшли як адміністратор.</span> :''}
        { isAdminAuthenticated ? <button className="header__btn" onClick={ () => adminLogout()}>Вийти</button> : ''}

        { isStudentAuthenticated ? <span className="header__txt">Ви увійшли як студент. <Link to="/student/panel">Панель</Link></span> :''}
        { isStudentAuthenticated ? <button className="header__btn" onClick={ () => studentLogout()}>Вийти</button> : ''}

    </div>
);

header.protoTypes = {
    isAdminAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        isAdminAuthenticated: !!state.admin.token,
        isStudentAuthenticated: !!state.student.token,
    }
}

export default connect(mapStateToProps, {adminLogout,studentLogout})(header);

