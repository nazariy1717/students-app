import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AddGroup from '../forms/AddGroupForm';
import GroupList from '../GroupList';

import api from '../../../api';

import { addGroup }  from '../../../actions/admin/addGroup';


class GroupPage extends React.Component{

    state = {
        groups: [],
        errors: []
    };

    constructor(props){
        super(props);
        this.submit =  this.submit.bind(this);
    }

    componentDidMount () {
        api.admin.getGroup()
            .then(res => this.setState({ groups: res.groupsMap }))
            .catch(err => {
                console.log(err.response);
                this.setState({ errors: err.response.data.errors })
            })
    }

    submit = data =>
        this.props.addGroup(data).then(response => alert(`Групу `+ response.groupName+ ' успішно додано!'));


    render(){
        const { errors } = this.state;

        return(
            <div className="page">
                <div className="page__sidebar">
                </div>
                <div className="page__content">
                    <h1 className="page__title">Управління групами</h1>

                    <h2>Добавити групу</h2>

                    <AddGroup submit={this.submit}/>


                    <h2>Список груп</h2>
                    <GroupList groups={this.state.groups}/>
                    { errors && <div>{errors}</div> }

                </div>


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
