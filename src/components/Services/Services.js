import React from 'react'
import './Services.scss'
import { Button } from '@material-ui/core'

const Option = ({ url, title, description }) => {
    return (
        <div className="option">
            <img src={url} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}
const Services = ({ title, subtitle, buttonTitle, optionData }) => {
    return (
        <div className='services'>
            <div className="services__header">
                <div className="title">
                    <h2>{title}</h2>
                    <p>{subtitle}</p>
                </div>
                <div className="start-uploading">
                    <Button>{buttonTitle}</Button>
                </div>
            </div>
            <div className="services__body">
                {optionData.map(option => {
                    return <Option key={Math.random()} url={option.url} title={option.title} description={option.description} />
                })}
            </div>
        </div>
    )
}

export default Services
