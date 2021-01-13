import React from 'react'
import './Sidebar.scss'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <NavLink to='/'>
                <div className="sidebar__logo">
                    <img src='./img/logo.svg' alt='Logo' />
                </div>
            </NavLink>
            <div className="sidebar__menu">
                <ul>
                    <NavLink to='/'>
                        <li>
                            <img src='./img/home.svg' alt='Home' />
                            <span>Home</span>
                        </li>
                    </NavLink>
                    <NavLink to='/documents'>
                        <li>
                            <img src='./img/mydocuments.svg' alt='documents' />
                            <span>My documents</span>
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
