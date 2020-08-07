import React from 'react'
// import { Switch } from 'react-router-dom';
import Router from './Router';
//RoutesWapper
// import Route from './Route';

// pages
import Login from '../pages/login';
import Pages from '../pages/home';
import PageNotFound from '../pages/page-not-found';

const ROUTES = [
    {
        path: "/",
        redirect: "/inicio",
        exact: true,
        component: () => { },
    },
    {
        path: "/inicio",
        component: Pages,
    },
    {
        path: "/login",
        component: Login,
    },
    {
        component: PageNotFound,
    },
]

export default function Routes() {
    return (
        // <Switch>
        //     <Route path="/" redirect="/inicio" exact component={() => { }} />
        //     <Route path="/inicio" component={Pages} />
        //     <Route path="/login" component={Login} />
        //     <Route component={PageNotFound} />
        // </Switch>
        <Router routes={ROUTES} />
    )
}
