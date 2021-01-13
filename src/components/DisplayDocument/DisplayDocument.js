import React from 'react'
import './DisplayDocument.scss'
import AddDocument from '../AddDocument/AddDocument';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { extendMenu } from '../../redux/actions/uiActions'
import { deleteAll } from '../../redux/actions/documentsAction'

const DisplayDocument = () => {
    const dispatch = useDispatch()
    const openMenu = () => {
        return dispatch(extendMenu())
    }
    const deleteAllDocuments = () => {
        dispatch(deleteAll())
    }
    const menuStatus = useSelector(state => state.ui.menuOpen)
    return (
        <div className="documents__display">
            <div className="display">
                <span>Select a file to Preview</span>
            </div>
            <div className="create">
                <Button onClick={openMenu}>
                    <span>Create</span>
                    <ExpandMoreIcon className={menuStatus? 'arrow-down': 'arrow-down opened'} />
                </Button>
            </div>
            <div className={menuStatus ? "extended-menu active" : "extended-menu"}>
                <AddDocument />
            </div>
            <div className="delete">
                <Button onClick={deleteAllDocuments}>
                    <img src='./img/delete.svg' alt='delete' />
                    <span>Delete all items</span>
                </Button>
            </div>
        </div>
    )
}

export default DisplayDocument
