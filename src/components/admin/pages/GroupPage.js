import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddGroup from '../forms/AddGroupForm';
import { addGroup }  from '../../../actions/admin/addGroup';

class GroupPage extends React.Component{

    constructor(props){
        super(props);
        this.submit =  this.submit.bind(this);
    }

    submit = data =>
        this.props.addGroup(data).then(() => this.props.history.push('/admin/groups'));

    render(){
        return(
            <div>
                <h1>Управління групами</h1>
                <h2>Добавити групу</h2>

                <AddGroup submit={this.submit}/>
            </div>
        )
    }
}


GroupPage.propTypes = {
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    addGroup: PropTypes.func.isRequired
};


export default connect(null, {addGroup})(GroupPage);
