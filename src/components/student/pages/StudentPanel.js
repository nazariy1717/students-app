import React from 'react';
import { Link } from 'react-router-dom';


class StudentPanel extends React.Component {

    state={
        studentName: localStorage.name
    };


    render() {
        return (


            <div className="panel-page">
                <div className="panel-page__top">
                    <h1>Особистий кабінет студента { this.state.studentName }</h1>
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
                                        <Link to="/student/lesson_2">
                                            <span>03.09.2018 12:10</span>
                                            <span>Теорія прийняття рішень</span>
                                        </Link>
                                    </div>
                                    <div className="schedule__row">
                                        <span>03.09.2018 14:30</span>
                                        <span>Лінгвістичне забезпечення комп'ютерних систем проектування</span>
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
                                        <span>Пари на цей день відсутні</span>
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
                                        <span>Автоматизовані системи технологічної підготовки виробництва</span>
                                    </div>
                                    <div className="schedule__row">
                                        <span>05.09.2018 10:20</span>
                                        <span>Автоматизовані системи технологічної підготовки виробництва</span>
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
                                        <span>Пари на цей день відсутні</span>
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
                                        <span>Пари на цей день відсутні</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h2 ></h2>


                </div>


            </div>


        );
    }


}

export default StudentPanel;
