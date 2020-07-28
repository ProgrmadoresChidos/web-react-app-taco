import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Index from '../pages/main-page';
import Ubication from '../pages/ubication-more-info/ubication';

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={Index}></Route>
            <Route exact path="/ubicacion" component={Ubication}></Route>
        </Switch>
    )
}
