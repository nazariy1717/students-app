import React from 'react';
import Sidebar from '../Sidebar';
import AddStudentForm from '../forms/AddStudentForm';
class StudentsPage extends React.Component{

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
                    <h1 className="page__title">Управління студентами</h1>
                    <div className="row m-row">
                        <div className="column col-lg-6">
                            <span className="page__subtitle --modifier">Новий студент</span>
                            <AddStudentForm />
                        </div>
                        <div className="column col-lg-6">
                            <span className="page__subtitle --modifier">Останні добавлені</span>
                            <div></div>
                            <span>Показати всі</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}




export default StudentsPage;
