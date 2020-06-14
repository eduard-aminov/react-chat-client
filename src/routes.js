import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth, Home} from './pages'

const Routes = () => {
    return (
        <Switch>
            <Route path={['/', '/login']} component={Auth} exact />
            <Route path={'/register'} component={Auth} />
            <Route path={'/im'} component={Home} />
        </Switch>
    )
}

export default Routes