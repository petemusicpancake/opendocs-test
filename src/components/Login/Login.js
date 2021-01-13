import React from 'react'
import './Login.scss'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { Field, Form, Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/actions/usersAction'

const Login = () => {
    const dispatch = useDispatch()
    const { isEmpty } = useSelector(state => state.firebase.auth)
    if (!isEmpty) {
        return <Redirect to='/' />
    }
    return (
        <div className='login'>
            <div className="wrapper">
                <Link to='/'>
                    <CloseIcon className='close' />
                </Link>
                <Link to='/register'>
                    <h3>Create a free account</h3>
                </Link>
                <Formik initialValues={{ email: '', password: '' }}
                    onSubmit={(data, { setSubmitting }) => {
                        setSubmitting(true)
                        dispatch(login(data.email, data.password))
                        setSubmitting(false)
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <h2>Sign In below to upload, share, edit and send documents.</h2>
                            <label htmlFor='email'>Email Address</label>
                            <Field
                                name='email'
                                type='email'
                                placeholder='Email'
                                value={values.email}
                                onChange={handleChange}
                                required
                            />
                            <div className="passLabel">
                                <label htmlFor='password'>Password</label>
                                <span>Forgot Password?</span>
                            </div>
                            <Field
                                name='password'
                                type='password'
                                placeholder='password'
                                value={values.password}
                                onChange={handleChange}
                                required
                            />
                            <Button type='submit' disabled={isSubmitting}>Sign in</Button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Login
