import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (

    <div className="home">
        <div className="home__left"><i></i></div>
        <div className="home__right">
            <div className="display-table">
                <div className="display-table__cell">
                    <div className="home__content">
                        <h1>Система моніторингу відвідування студентів занять </h1>
                        <p>Увійдіть в систему щоб розпочати роботу</p>
                        <Link to="/student" className="btn --blue">Я студент</Link>
                        <Link to="/teacher" className="btn --blue">Я викладач</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

);

export default HomePage;
