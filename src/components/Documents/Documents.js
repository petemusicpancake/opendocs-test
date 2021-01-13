import React from 'react'
import './Documents.scss'
import Document from '../Document/Document';
import DisplayDocument from '../DisplayDocument/DisplayDocument';
import { Checkbox } from '@material-ui/core'
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';

const Documents = () => {
    const uid = useSelector(state => state.firebase.auth.uid)
    useFirestoreConnect([
        {
            collection: "users",
            doc: uid,
            subcollections: [{ collection: 'documents' }],
            orderBy: ['timestamp', 'desc'],
            storeAs: 'documents'
        }
    ])
    const documents = useSelector(state => state.firestore.ordered.documents)
    const { isEmpty } = useSelector(state => state.firebase.auth)
    if (isEmpty)
        return <Redirect to='/' />

    return (
        <div className='documents'>
            <h2>My documents</h2>
            <div className="wrapper">
                <div className="documents__list">
                    <div className="documents__listHeader">
                        <div className="document-name">
                            <Checkbox style={{ "color": "#1F8BC0" }} />
                            <h3>Documents</h3>
                        </div>
                        <div className="filter">
                            <h3>Last edited</h3>
                            <h3>Signed</h3>
                            <h3>Permission</h3>
                            <h3>Size</h3>
                        </div>
                    </div>
                    {documents?.map(({ id, name, permission, signed, size, timestamp, url }) => <Document
                        key={id}
                        id={id}
                        name={name}
                        permission={permission}
                        signed={signed}
                        size={Math.ceil(size / 1000)}
                        timestamp={timestamp}
                        url={url}
                    />)}
                </div>
                <DisplayDocument />
            </div>
        </div>
    )
}

export default Documents
