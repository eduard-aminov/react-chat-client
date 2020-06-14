import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {Auth} from './pages'

const Routes = () => {
    return (
        <Switch>
            <Route path={['/', '/login']} component={Auth} exact />
            <Route path={'/register'} component={Auth} />
        </Switch>
    )
}

export default Routes