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
                                        <span>03.09.2018 12:10</span>
                                        <span>Лінгвістичне забезпечення комп'ютерних систем проектування</span>
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
                    <h2 >Архівні пари</h2>


                    <div className="schedule-table">
                         <table>
                             <thead>
                                <th>КНст-32</th>
                                <th>
                                    <span>Теорія прийняття рішень</span>
                                    <span>03.09.2018 8:30</span>
                                </th>
                             </thead>
                             <tbody>
                                <tr>
                                    <td>Антонюк Юрій</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label1"/>
                                            <label htmlFor="label1"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Білоус Юрій</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label2"/>
                                            <label htmlFor="label2"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Гульоватий Богдан</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label3"/>
                                            <label htmlFor="label3"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Дмитрів Андрій</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label4"/>
                                            <label htmlFor="label4"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Зарічний Олег</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label5"/>
                                            <label htmlFor="label5"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Калінчук Назар</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label6"/>
                                            <label htmlFor="label6"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Київський Максим</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label7"/>
                                            <label htmlFor="label7"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Когут Роман</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label8"/>
                                            <label htmlFor="label8"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Пелех Олег</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label9"/>
                                            <label htmlFor="label9"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Семенишин Андрій</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label10"/>
                                            <label htmlFor="label10"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Шагала Василь</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label11"/>
                                            <label htmlFor="label11"></label>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Чубей Юрій</td>
                                    <td>
                                        <div className="checkbox">
                                            <input type="checkbox" name="label" id="label12"/>
                                            <label htmlFor="label12"></label>
                                        </div>
                                    </td>
                                </tr>

                             </tbody>
                         </table>

                        {/*<button type="button" className="btn --blue">Зберегти</button>*/}
                    </div>
                </div>


            </div>
        );
    }


}

export default TeacherPanel;
