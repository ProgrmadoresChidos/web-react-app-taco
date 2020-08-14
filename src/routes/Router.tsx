import React from 'react';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Route from './Route';

export default function Router({ routes }) {
  return (
    <Switch>
      {
        routes.map(route => (
          <Route {...route} />
        ))
      }
    </Switch>
  )
}

Router.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    redirect: PropTypes.string,
    exact: PropTypes.bool,
    isPrivate: PropTypes.bool,
  })).isRequired,
}