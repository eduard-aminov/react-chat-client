import React from 'react'
import {Route, Switch} from 'react-router-dom'
import {AuthContainer} from './containers'
import {Home} from './pages'

const Routes = () => {
    return (
        <Switch>
            <Route path={['/', '/login']} component={AuthContainer} exact />
            <Route path={'/register'} component={AuthContainer} />
            <Route path={'/im'} component={Home} />
        </Switch>
    )
}

export default Routes