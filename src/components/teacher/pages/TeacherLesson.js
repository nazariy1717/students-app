import React from 'react';
import { notify } from 'react-notify-toast';


class TeacherLesson extends React.Component {

    state={
        teacherName: localStorage.teacherName
    };

    constructor(props){
        super(props);
        this.submit = this.showMessage.bind(this);
    }

    showMessage(e){
        notify.show(`Збережено`, 'success');
    }

    render() {
        return (
            <div className="panel-page">
                <div className="panel-page__top">
                    <h1>Особистий кабінет викладача { this.state.teacherName }</h1>
                    <h2>Розклад на поточний тиждень <span>03.09.2018 - 07.09.2018</span></h2>
                </div>
                <div className="container">
                    <h2 ></h2>


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

                        <button type="button" className="btn --blue" onClick={this.showMessage}>Зберегти</button>
                    </div>
                </div>
            </div>


        );
    }


}

export default TeacherLesson;
