import React from 'react'
import './Document.scss'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { Button, Checkbox, IconButton } from '@material-ui/core';
import { useSelector } from 'react-redux';
import moment from 'moment'
import pretty from 'prettysize'


const Document = ({ id, name, permission, signed, size, timestamp, url }) => {
    const editMenuStatus = useSelector(state => state.ui.editMenuOpen)
    const nameArray = name.split('.')
    const fileType = nameArray[nameArray.length - 1]
    const formattedName = name.length > 16 ? `${name.slice(0, 12)}...${fileType}` : name
    return (
        <div className="document">
            <div className="document__name">
                <Checkbox
                    style={{ "color": "#1F8BC0" }}
                    value={name}
                    name='selected'
                    type='checkbox'
                    as={Checkbox}
                />
                <img src='./img/file.svg' alt='file' />
                <h2>{formattedName}</h2>
            </div>
            <div className="document__info">
                <h3>{moment(timestamp?.toDate()).fromNow()}</h3>
                <h3>{signed ? '+' : '-'}</h3>
                <h3>{permission}</h3>
                <h3>{pretty(size)}</h3>
                <IconButton className='dots'>
                    <MoreHorizIcon />
                </IconButton>
                <div className={editMenuStatus ? 'edit-menu active' : 'edit-menu'}>
                    <Button>
                        <img src='./img/editdocument.svg' alt='edit' />
                    </Button>
                    <Button>
                        <img src='./img/deletedocument.svg' alt='deletedocument' />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Document
