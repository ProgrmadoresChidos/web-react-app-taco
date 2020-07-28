import React from 'react'
import { Switch } from 'react-router-dom';
//RoutesWapper
import Route from './Route';

// pages
import Index from '../pages/main-page'; 
import Ubication from '../pages/ubication-more-info/ubication';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/ubicacion" component={Ubication} isPrivate></Route>
        </Switch>
    )
}
