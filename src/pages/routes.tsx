import React from 'react'
import { Switch } from 'react-router-dom';
import Index from './main-page/index';
import Route from '../routes/Route';
import Ubication from './ubication-more-info/ubication';

export default function Routes({ path }) {
    
    return (
        <Switch>
            <Route path={`${path}`} component = { Index }/>
            <Route path={`${path}/ubicacion`} component = { Ubication }/>
        </Switch>
    )
}
