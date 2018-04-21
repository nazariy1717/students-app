import React from 'react';
import PropTypes from 'prop-types';

const Notify = ({text}) => <span style={{ color: '#ae5856' }}>{text}</span>;

Notify.propTypes = {
    text: PropTypes.string.isRequired
};

export default Notify;