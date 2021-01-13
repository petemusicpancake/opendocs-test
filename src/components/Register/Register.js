import React from 'react'
import './Register.scss'
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core'
import { Link, Redirect } from 'react-router-dom'
import { Formik, Form, Field } from 'formik'
import { register } from '../../redux/actions/usersAction'
import { useDispatch, useSelector } from 'react-redux'

const Register = () => {
    const dispatch = useDispatch()
    const { isEmpty } = useSelector(state => state.firebase.auth)
    if (!isEmpty) {
        return <Redirect to='/' />
    }
    return (
        <div className='register'>
            <div className="wrapper">
                <Link to='/'>
                    <CloseIcon className='close' />
                </Link>
                <Link to='/login'>
                    <h3>Login</h3>
                </Link>
                <Formik initialValues={{ username: '', email: '', password: '' }}
                    onSubmit={({ username, email, password }, { setSubmitting }) => {
                        setSubmitting(true)
                        dispatch(register(email, password, username))
                        setSubmitting(false)
                    }}>
                    {({ values, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit}>
                            <h2>Sign up</h2>
                            <label htmlFor='email'>Username</label>
                            <Field
                                name='username'
                                type='text'
                                placeholder='Username'
                                value={values.username}
                                onChange={handleChange}
                                required
                            />
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
                            </div>
                            <Field
                                name='password'
                                type='password'
                                placeholder='password'
                                value={values.password}
                                onChange={handleChange}
                                required
                            />
                            <Button disabled={isSubmitting} type='submit'>Sign up</Button>
                        </Form>
                    )}

                </Formik>
            </div>
        </div>
    )
}

export default Register
