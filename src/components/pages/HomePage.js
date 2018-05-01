import React from 'react';

const HomePage = () => (

    <div className="home">
        <div className="home__left"><i></i></div>
        <div className="home__right">
            <div className="display-table">
                <div className="display-table__cell">
                    <div className="home__content">
                        <h1>Система моніторингу відвідування студентів занять </h1>
                        <p>Увійдіть в систему щоб розпочати роботу</p>
                        <button type="button" className="btn --blue">Я студент</button>
                        <button type="button" className="btn --blue">Я викладач</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

);



export default HomePage;
