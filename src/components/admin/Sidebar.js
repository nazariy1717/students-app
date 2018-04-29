import React from 'react';
import { NavLink  } from 'react-router-dom';


const Sidebar = () => (
    <div className="sidebar">
        <ul className="sidebar__list">
            <li className="sidebar__item">
                <NavLink to="/admin/groups"  activeStyle={{ color: '#2185d0' }}>Групи</NavLink>
            </li>
            <li className="sidebar__item">
                <NavLink to="/admin/students" activeStyle={{ color: '#2185d0' }}>Студенти</NavLink>
            </li>
            <li className="sidebar__item">
                <NavLink to="/admin/teachers" activeStyle={{ color: '#2185d0' }}>Викладачі</NavLink>
            </li>
            <li className="sidebar__item">
                <NavLink to="/admin/lessons" activeStyle={{ color: '#2185d0' }}>Пари</NavLink>
            </li>
        </ul>
    </div>
);



export default Sidebar;

