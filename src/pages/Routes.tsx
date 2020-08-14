import React from 'react'
import Router from '../routes/Router';

// pages
import Login from './login';
import Pages from './home';
import PageNotFound from './page-not-found';
import Signup from './signup';

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
        path: '/signup',
        component: Signup
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
