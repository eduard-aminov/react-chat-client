import React from 'react'
import {connect} from 'react-redux'
import {Auth} from '../pages'

const AuthContainer = ({ location, isAuth }) => {
    const isRegisterPage = location.pathname.includes('register')

    return (
        <Auth
            isRegisterPage={isRegisterPage}
            isAuth={isAuth}
        />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, null)(AuthContainer)