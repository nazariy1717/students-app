import React from 'react';
import { Link } from 'react-router-dom';


const Sidebar = () => (
    <div className="sidebar">
        <ul className="sidebar__list">
            <li className="sidebar__item">
                <Link to="/admin/groups">Групи</Link>
            </li>
            <li className="sidebar__item">
                <Link to="/admin/students">Студенти</Link>
            </li>
            <li className="sidebar__item">
                <Link to="/admin/teachers">Викладачі</Link>
            </li>
            <li className="sidebar__item">
                <Link to="/admin/groups">Пари</Link>
            </li>
        </ul>
    </div>
);



export default Sidebar;

