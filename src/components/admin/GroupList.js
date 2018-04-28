import React from 'react';
// import PropTypes from 'prop-types';


const GroupList = ({ groups}) => {

    const list = groups.map((group) =>
        <li key={group.id}>
            <span>Назва групи: {group.groupName}</span>
        </li>
    );

    return(
       <ul>
           {list}
       </ul>
    );
};

export default GroupList;
