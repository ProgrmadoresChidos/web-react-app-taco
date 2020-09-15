import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAuthIsLoggedIn } from '../redux/auth/auth';

export default function RouteWrapper({ component, isPrivate = false, redirect = '', ...rest }) {

    const isLoggedIn = useSelector(selectAuthIsLoggedIn);

    // const isLog = true;

    if (isPrivate && !isLoggedIn) {
        return <Redirect to="/signup" />;
    }

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