import React from 'react'
import { Switch } from 'react-router-dom';
//RoutesWapper
import Route from './Route';

// pages
import Login from '../login/login';
import Pages from '../pages/pages';

export default function Routes() {
    return (
        <Switch>
            <Route path="/inicio" component={ Pages }></Route>
            <Route path="/login" component={ Login }></Route>
        </Switch>
    )
}
