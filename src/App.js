import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setIsLogin, setToken} from './store/actions'
import Routes from './routes'

const App = ({ setToken, setIsLogin }) => {

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('userData'))
        if (data) {
            setToken(data)
            setIsLogin(true)
        }
    }, [setToken, setIsLogin])

    return (
        <div className="wrapper">
            <Routes/>
        </div>
    )
}

export default connect(null, { setToken, setIsLogin } )(App)
