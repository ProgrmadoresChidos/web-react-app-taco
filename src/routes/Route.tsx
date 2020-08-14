import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({ component, isPrivate = false, redirect = '', ...rest }) {

    //const signed = true;

    // if (isPrivate && !signed) {
    //     return <Redirect to="/" />;
    // }

    // if (!isPrivate && signed) {
    //     return <Redirect to="/menu" />;
    // }
    if (!!redirect) {
        return (
            <Route {...rest} >
                <Redirect to={redirect} />
            </Route>
        );
    }
    return (<Route {...rest} component={component} />);

}

RouteWrapper.propTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
    redirect: PropTypes.string,
};

RouteWrapper.defaultProps = {
    isPrivate: false,
    redirect: '',
};