import React from 'react'

import { Router, Switch, Route } from 'react-router'

import { history } from './history'

import Login from './pages/Login'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const Routes = () => (
    <Router history={ history } >
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)

export default Routes