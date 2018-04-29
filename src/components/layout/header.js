import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { adminLogout } from '../../actions/admin/adminAuth';


const header = ({ isAdminAuthenticated, adminLogout }) => (

    <header className="header">
        { isAdminAuthenticated ? <button onClick={ () => adminLogout()}>Вийти</button> : ''}
    </header>
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

