import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { adminLogout } from '../../actions/adminAuth';


const HomePage = ({ isAdminAuthenticated, adminLogout }) => (


        <div className="home">
            <div className="home__left"></div>
            <div className="home__right">
                <div className="display-table">
                    <div className="display-table__cell">
                        <div className="home__content">
                            <h1>Home page</h1>
                            { isAdminAuthenticated ? <button onClick={ () => adminLogout()}>Вийти</button> : ''}
                        </div>
                    </div>
                </div>

            </div>
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
