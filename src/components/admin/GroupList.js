import React from 'react';
import PropTypes from 'prop-types';

class GroupList extends React.Component {

    constructor(props) {
        super(props);
        this.removeGroup = this.removeGroup.bind(this);
    }

    removeGroup(id){
        this.props.removeGroup(id);
    }

    render() {
        return (
            <ul className="group__list">
                {this.props.groups.map((group, i) => (
                    <li key={i} className="group__list-item">
                        <span>{group.groupName}</span>
                        <button onClick={this.removeGroup.bind(this, group)}>Видалити</button>
                    </li>
                ))}
            </ul>
        );
    }
}



GroupList.propTypes = {
    removeGroup: PropTypes.func.isRequired,
    groups: PropTypes.array.isRequired
};


export default GroupList;
