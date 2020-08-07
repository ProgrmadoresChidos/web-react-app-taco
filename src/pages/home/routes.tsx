import React from 'react'
// import { Switch } from 'react-router-dom';
import Index from './spa-pages/main-page/index';
// import Route from '../../routes/Route';
import Ubication from './spa-pages/ubication-more-info/ubication';
import { Menu } from './spa-pages/menu/menu';
import Router from '../../routes/Router';

export default function Routes({ path }) {
    const ROUTES = [
        {
            path: `${path}`,
            exact: true,
            component: Index,
        },
        {
            path: `${path}/ubicacion`,
            component: Ubication,
        },
        {
            path: `${path}/menu`,
            component: Menu,
        },
    ]
    return (
        // <Switch>
        //     <Route path={`${path}`} exact component={Index} />
        //     <Route path={`${path}/ubicacion`} component={Ubication} />
        //     <Route path={`${path}/menu`} component={Menu} />
        // </Switch>
        <Router routes={ROUTES} />
    )
}
