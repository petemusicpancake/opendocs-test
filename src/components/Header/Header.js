import React from 'react'
import './Header.scss'
import SearchIcon from '@material-ui/icons/Search';
import MenuIcon from '@material-ui/icons/Menu';
import { Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/actions/usersAction';
import {openBurgerMenu} from '../../redux/actions/uiActions'


const Header = () => {
    const dispatch = useDispatch()
    const { isEmpty, username } = useSelector(state => state.firebase.profile)
    const signOut = () => {
        dispatch(logout())
    }
    const toggleBurgerMenu = () => {
        dispatch(openBurgerMenu())
    }
    const burgerMenuStatus = useSelector(state => state.ui.burgerOpen)
    return (
        <div className='header'>
            <div className="header__searchBar">
                <SearchIcon />
                <input type='text' placeholder='Search' />
            </div>
            <div className="header__menu">
                {!isEmpty ?
                    (<ul>
                        <li className='welcome'>Welcome <span>@{username}</span></li>
                        <Button onClick={signOut}>
                            <li>Logout</li>
                        </Button>
                    </ul>) :
                    (
                        <>
                            <IconButton className='burger' onClick={toggleBurgerMenu}>
                                <MenuIcon />
                            </IconButton>
                            <ul className={burgerMenuStatus? 'menu active': ''}>
                                <Link to='/login'>
                                    <Button>
                                        <li>Login</li>
                                    </Button>
                                </Link>
                                <Button>
                                    <li>About</li>
                                </Button>
                                <Button>
                                    <li>Contact</li>
                                </Button>

                            </ul>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default Header
