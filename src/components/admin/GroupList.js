import React from 'react';
// import PropTypes from 'prop-types';


const GroupList = ({ groups}) => {

    const list = groups.map((group,i) =>
        <li key={i} className="group__list-item">
            <span>{group.groupName}</span>
        </li>
    );

    return(
       <ul className="group__list">
           {list}
       </ul>
    );
};

export default GroupList;
