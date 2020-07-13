import React from 'react'
import './Auth.scss'
import {Redirect} from 'react-router'
import {LoginForm, RegisterForm} from '../../modules'

const Auth = ({ isRegisterPage, isAuth }) => {

    if (isAuth) {
        return <Redirect to={'/im'} />
    }

    return (
        <section className='auth'>
            <div className='auth-content'>
                {!isRegisterPage
                    ? <LoginForm />
                    : <RegisterForm />
                }
            </div>
        </section>
    )
}

export default Auth