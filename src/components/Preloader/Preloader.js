import React from 'react'
import './Preloader.scss'

const Preloader = () => {
    return (
        <div className="preloader">
            <div className="square"></div>
            <div className="path">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Preloader
