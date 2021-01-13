import React from 'react'
import './HomePage.scss'
import Sidebar from '../Sidebar/Sidebar';
import Header from '../Header/Header';
import ServicesContainer from '../ServicesContainer/ServicesContainer';
import Documents from '../Documents/Documents'
import { Route } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className='homepage'>
            <Sidebar />
            <div className="homepage__body">
                <Header />
                <Route path='/' exact component={ServicesContainer} />
                <Route path='/documents' component={Documents} />
            </div>
        </div>
    )
}

export default HomePage
