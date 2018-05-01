import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { adminLogout } from '../../actions/admin/adminAuth';


const header = ({ isAdminAuthenticated, adminLogout }) => (

    <div className="header">
        <span className="header__txt">Ви увійшли як адміністратор.</span>
        { isAdminAuthenticated ? <button className="header__btn" onClick={ () => adminLogout()}>Вийти</button> : ''}
    </div>
);

header.protoTypes = {
    isAdminAuthenticated: PropTypes.bool.isRequired,
    logout: PropTypes.func.isRequired
};

function mapStateToProps(state){
    return {
        isAdminAuthenticated: !!state.admin.token
    }

}

export default connect(mapStateToProps, {adminLogout})(header);

