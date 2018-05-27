import React from 'react';
import PropTypes from 'prop-types';

class LessonsList extends React.Component {

    constructor(props) {
        super(props);
        this.removeLesson = this.removeLesson.bind(this);
    }

    removeLesson(id){
        this.props.removeLesson(id);
    }
    render() {

        return (
            <ul className="student__list">
                <li className="student__list-head row m-row">
                    <div className="column col-lg-2"><span>Назва пари:</span></div>
                    <div className="column col-lg-2"><span>Викладач:</span></div>
                    <div className="column col-lg-2"><span>Група:</span></div>
                    <div className="column col-lg-5"><span>Дата:</span></div>
                </li>
                {this.props.lessons.slice(0).reverse().map((lesson, i) => (
                    <li key={i} className="student__list-item row m-row">
                        <div className="column col-lg-2">
                            <span>{lesson.name}</span>
                        </div>
                        <div className="column col-lg-2">
                            <span>{lesson.teacher}</span>
                        </div>
                        <div className="column col-lg-2">
                            <span>{lesson.group}</span>
                        </div>
                        <div className="column col-lg-5">
                            {lesson.dates.map((date, i) => (
                                <span className="txt-items">
                                    {date}
                                </span>
                            ))}
                        </div>
                        <button onClick={this.removeLesson.bind(this, lesson)}
                                className="student__list-remove">Видалити</button>
                    </li>
                ))}
            </ul>
        );
    }
}



LessonsList.propTypes = {
    removeLesson: PropTypes.func.isRequired,
    lessons: PropTypes.array.isRequired
};


export default LessonsList;