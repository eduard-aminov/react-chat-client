import React from 'react'
import './Auth.scss'
import {LoginForm, RegisterForm} from '../../modules'

const Auth = ({location}) => {
    const isRegisterPage = location.pathname.includes('register')

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