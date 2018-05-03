import React from 'react';


class TeacherPanel extends React.Component {

    state={
        teacherName: localStorage.teacherName
    };


    render() {
        return (
            <div className="student-page">
                <div className="display-table">
                    <div className="display-table__cell">
                        <h1>Вітаємо { this.state.teacherName }</h1>
                    </div>
                </div>
            </div>
        );
    }


}

export default TeacherPanel;
