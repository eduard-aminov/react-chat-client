import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {setIsAuth, setToken} from './store/actions'
import Routes from './routes'

const App = ({ setToken, setIsAuth }) => {

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('token'))
        if (data) {
            setToken(data)
            setIsAuth(true)
        }
    }, [setToken, setIsAuth])

    return (
        <div className="wrapper">
            <Routes/>
        </div>
    )
}

export default connect(null, { setToken, setIsAuth } )(App)
