import React, { Component, FunctionComponent } from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// type PorpsRoutes {
//     component: Component,
//     isPrivate,
//     rest
// }

export default function RouteWrapper ({ component, isPrivate = false, ...rest}) {

    //const signed = true;

    // if (isPrivate && !signed) {
    //     return <Redirect to="/" />;
    // }
    
    // if (!isPrivate && signed) {
    //     return <Redirect to="/menu" />;
    // }

    return (<Route {...rest} component={component} />);

}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
};
  
RouteWrapper.defaultProps = {
isPrivate: false
};