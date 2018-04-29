import React from 'react';
import Sidebar from '../Sidebar';

class TeacherPage extends React.Component{

    state = {
        groups: [],
        errors: [],
    };

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="page">
                <div className="page__sidebar">
                    <Sidebar />
                </div>
                <div className="page__content">
                    <h1 className="page__title">Управління викладачами</h1>

                </div>
            </div>
        )
    }
}




export default TeacherPage;
