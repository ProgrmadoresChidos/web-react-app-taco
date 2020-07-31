import React from 'react'
import { Switch } from 'react-router-dom';
//RoutesWapper
import Route from './Route';

// pages
import Login from '../login/login';
import Pages from '../pages/pages';
import PageNotFound from '../pages/page-not-found/page-not-found';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" redirect="/inicio" exact component={() => { }} />
            <Route path="/inicio" component={Pages} />
            <Route path="/login" component={Login} />
            <Route path="*" component={PageNotFound} />
        </Switch>
    )
}
