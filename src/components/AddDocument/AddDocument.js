import React from 'react'
import './AddDocuments.scss'
import { Button } from '@material-ui/core'
import { Formik, Form } from 'formik'
import { useDispatch } from 'react-redux'
import { addDocument } from '../../redux/actions/documentsAction'

const AddDocument = () => {
    const dispatch = useDispatch()
    return (
        <div className='addDocument '>
            <Formik initialValues={{ file: null }}
                onSubmit={(values, { resetForm }) => {
                    dispatch(addDocument(values.file))
                    resetForm()
                }}>
                {({ values, setFieldValue, handleSubmit }) => (
                    <Form onSubmit={handleSubmit}>
                        <Button>
                            <img src='./img/uploadfile.svg' alt='upload' />
                            <label htmlFor="file-upload">Custom Upload</label>
                        </Button>
                        <input
                            id="file-upload"
                            type="file"
                            onChange={event => setFieldValue('file', event.target.files[0])}
                        />
                        <h3 className='file-title'>{values.file?.name}</h3>
                        <Button disabled={!values.file} className='add' type='submit'>Add document</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default AddDocument
