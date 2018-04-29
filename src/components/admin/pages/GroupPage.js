import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { notify } from 'react-notify-toast';

import AddGroup from '../forms/AddGroupForm';
import GroupList from '../GroupList';
import Sidebar from '../Sidebar';
import api from '../../../api';
import { addGroup }  from '../../../actions/admin/addGroup';


class GroupPage extends React.Component{

    state = {
        groups: [],
        errors: [],
    };

    constructor(props){
        super(props);
        this.submit =  this.submit.bind(this);
        this.removeGroup =  this.removeGroup.bind(this);
    }

    getGroups(){
        api.admin.getGroup()
            .then(res => this.setState({ groups: res.groupsMap }))
            .catch(err => this.setState({ errors: err.response.data.errors }))
    }

    componentDidMount () {
        this.getGroups();
    }

    submit = data => {
        let exist = 0;
        this.state.groups.forEach(function(val,index){
            if(val.groupName === data.groupName){
                exist = 1;
            }
        });
        if(!exist){
            this.props.addGroup(data)
                .then(response => {
                    notify.show(`Групу `+ response.groupName+ ' успішно додано!', 'success' );
                    let newItem = {id: response._id, groupName: response.groupName};
                    this.setState({
                        groups: [...this.state.groups, newItem],
                        errors: ''
                    });
                })
                .catch(err => notify.show(err.response.data.errors, 'error'));
        } else{
            notify.show('Вказана група вже існує!', 'error');
        }
    };

    removeGroup(group){

        const newGroupList = this.state.groups.filter(item =>{
            return item!== group;
        });

        this.setState({ groups: [...newGroupList] });

        if(newGroupList.length === 0){
            this.setState({errors: 'Не знайдено жодної групи'});
        }

        api.admin.removeGroup(group)
            .then(res => notify.show(`Групу `+ res.group.groupName + ' видалено!', 'success' ))
            .catch(err => console.log(err));
    }

    render(){
        const { errors } = this.state;

        return(
            <div className="page">
                <div className="page__sidebar">
                    <Sidebar />
                </div>
                <div className="page__content">
                    <h1 className="page__title">Управління групами</h1>
                    <div className="row m-row align-middle">
                        <div className="column ">
                            <h2>Добавити групу</h2>
                        </div>
                        <div className="column ">
                            <AddGroup submit={this.submit}/>
                        </div>
                    </div>
                    <div className="group">
                        <GroupList groups={this.state.groups} removeGroup={this.removeGroup.bind(this)}/>
                        { errors && <div style={{ color: '#ae5856' }}>{errors}</div> }
                    </div>
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
