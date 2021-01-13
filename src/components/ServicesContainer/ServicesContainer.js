import React from 'react'
import Services from '../Services/Services'

const ServicesContainer = () => {
    const servicesOptions = [
        {
            url: './img/upload.svg',
            title: '1. Upload files',
            description: 'Upload up to 2GB of documents to our secure server for easy access anywhere'
        },
        {
            url: './img/share.svg',
            title: '2. Share',
            description: 'Seamlessly share files with one to several collaborator'
        },
        {
            url: './img/edit.svg',
            title: '3. Edit',
            description: 'Edit Word (.docx) and PDF (.pdf) files through our integrated form editing API'
        },
        {
            url: './img/send.svg',
            title: '4. Send',
            description: 'Send completed forms to recipients through Gmail, Outlook, and Yahoo'
        }
    ]
    const library = [
        {
            url: './img/nda.png',
            title: 'NDA',
            description: 'Lorem ipsum'
        },
        {
            url: './img/invoice.png',
            title: 'Invoice',
            description: 'Lorem ipsum'
        },
        {
            url: './img/claindeed.png',
            title: 'Quit Clain Deed',
            description: 'Lorem ipsum'
        },
        {
            url: './img/rentalapplication.png',
            title: 'Rental Application',
            description: 'Lorem ipsum'
        },
        {
            url: './img/lease.png',
            title: 'Commercial Lease',
            description: 'Lorem ipsum'
        },
        {
            url: './img/roommate.png',
            title: 'Roommate',
            description: 'Lorem ipsum'
        }
    ]
    return (
        <div className='servicesContainer'>
            <Services
                title='How it works'
                subtitle='Lorem ipsum dolor sit amet dan aku akan.'
                buttonTitle='start uploading'
                optionData={servicesOptions}
            />
            <Services
                title='Browse our legal document library'
                subtitle='Over 1,000 attorney-approved legal documents'
                buttonTitle='Browse Library'
                optionData={library}
            />
        </div>
    )
}

export default ServicesContainer
