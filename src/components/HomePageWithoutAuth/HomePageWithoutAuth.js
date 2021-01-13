import React from 'react'
import './HomePageWithoutAuth.scss'
import Header from '../Header/Header'
import ServicesContainer from '../ServicesContainer/ServicesContainer'
import { Route, Link, Redirect } from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import { useSelector } from 'react-redux'


const HomePageWithoutAuth = () => {
    const { isEmpty } = useSelector(state => state.firebase.auth)
    if (!isEmpty) {
        return <Redirect to='/' />
    }
    return (
        <div className='homeDefault'>
            <Route path='/login' component={Login} />
            <Route path='/register' component={Register} />
            <div className="homeDefault__header">
                <div className="logo">
                    <Link to='/'>
                        <img src='./img/logo.svg' alt='logo' />
                    </Link>
                </div>
                <div className="menu">
                    <Header />
                </div>
            </div>
            <div className="homeDefault__body">
                <ServicesContainer />
            </div>
        </div>
    )
}

export default HomePageWithoutAuth
