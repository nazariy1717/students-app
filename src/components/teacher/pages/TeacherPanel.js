import React from 'react';


class TeacherPanel extends React.Component {

    state={
        teacherName: localStorage.teacherName
    };


    render() {
        return (
            <div className="panel-page">
                <div className="panel-page__top">
                    <h1>Особистий кабінет викладача { this.state.teacherName }</h1>
                    <h2>Розклад на поточний тиждень <span>03.09.2018 - 07.09.2018</span></h2>
                </div>
                <div className="panel-page__content">
                    <div className="row m-row">
                        <div className="column panel-page__column">
                            <div className="schedule">
                                <div className="schedule__top">
                                    <span>Понеділок</span>
                                </div>
                                <div className="schedule__content">
                                    <div className="schedule__row">
                                        <span>03.09.2018 8:30</span>
                                        <span>Теорія прийняття рішень</span>
                                    </div>
                                    <div className="schedule__row">
                                        <span>03.09.2018 10:20</span>
                                        <span>Об'єктно-орієнтоване програмування</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="column panel-page__column">
                            <div className="schedule">
                                <div className="schedule__top">
                                    <span>Вівторок</span>
                                </div>
                                <div className="schedule__content">
                                    <div className="schedule__row">
                                        <span>04.09.2018 12:10</span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="column panel-page__column">
                            <div className="schedule">
                                <div className="schedule__top">
                                    <span>Середа</span>
                                </div>
                                <div className="schedule__content">
                                    <div className="schedule__row">
                                        <span>05.09.2018 8:30</span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column panel-page__column">
                            <div className="schedule">
                                <div className="schedule__top">
                                    <span>Четвер</span>
                                </div>
                                <div className="schedule__content">
                                    <div className="schedule__row">
                                        <span>06.09.2018 10:20</span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="column panel-page__column">
                            <div className="schedule">
                                <div className="schedule__top">
                                    <span>Пятниця</span>
                                </div>
                                <div className="schedule__content">
                                    <div className="schedule__row">
                                        <span>07.09.2018 10:20</span>
                                        <span>Теорія прийняття рішень</span>
                                    </div>
                                    <div className="schedule__row">
                                        <span>07.09.2018 12:10</span>
                                        <span>Об'єктно-орієнтоване програмування</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }


}

export default TeacherPanel;
