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
                <li className="group__list-head">
                    <div>Назва групи:</div>
                    <div>ID групи:</div>
                </li>
                {this.props.groups.slice(0).reverse().map((group, i) => (
                    <li key={i} className="group__list-item">
                        <div>{group.groupName}</div>
                        <div>{group.id}</div>
                        <button
                            onClick={this.removeGroup.bind(this, group)}
                            className="group__list-remove"
                        >Видалити</button>
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
