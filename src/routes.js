import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {LoginForm, RegisterForm} from './modules'

const Routes = () => {
    return (
        <Switch>
            <Route path={['/', '/login']} component={LoginForm} exact />
            <Route path={'/register'} component={RegisterForm} />
        </Switch>
    )
}

export default Routes