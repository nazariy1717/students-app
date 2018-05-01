import React from 'react';


class StudentPanel extends React.Component {

    state={
        studentName: localStorage.name
    };


    render() {
        return (
            <div className="student-page">
                <div className="display-table">
                    <div className="display-table__cell">
                        <h1>Вітаємо { this.state.studentName }</h1>
                    </div>
                </div>
            </div>
        );
    }


}

export default StudentPanel;
