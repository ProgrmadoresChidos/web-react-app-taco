import React, { useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import {
    selectAuthIsLoggedIn,
    selectAuthFetching,
    selectAuthPayload,
    selectAuthError,
} from '../../redux/auth/auth';
import { logoutService } from '../../services/auth/auth';
import style from "./navbar.module.css";

const Navbar = ({ url }) => {

    const isLoggedIn = useSelector(selectAuthIsLoggedIn);
    const loginPayload = useSelector(selectAuthPayload);
    const loginError = useSelector(selectAuthError);
    const isFetching = useSelector(selectAuthFetching);
    const MySwal = withReactContent(Swal);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(logoutService());
    }

    useEffect(() => {
        if (!isFetching && !loginError && !loginPayload) {
            MySwal.close()
        } else if (isFetching) {
            MySwal.fire({
                title: 'Espere..',
                text: 'Cerrando sesión',
                icon: 'info',
                allowOutsideClick: false
            })
            MySwal.showLoading();
        }
    })

    return (
        <header className={`${style.navbar} ${style.navbar_background}`}>
            <div className={style.navbar__contentWrapper}>
                <NavLink exact to={`${url}`} className={`${style.navbar__navOption} ${style.navbar_background} `} activeClassName={style.navbar_activated}>
                    <p className={style.navbar__text}>Inicio</p>
                </NavLink>
                <NavLink to={`${url}/ubicacion`} className={`${style.navbar__navOption} ${style.navbar__background}`} activeClassName={style.navbar_activated}>
                    <p className={style.navbar__text}> Ubicación & Horarios</p>
                </NavLink>
                <NavLink to={`${url}/menu`} className={`${style.navbar__navOption} ${style.navbar_background}`} activeClassName={style.navbar_activated}>
                    <p className={style.navbar__text}>Menú</p>
                </NavLink>
                {(isLoggedIn ?
                    <div onClick={() => logout()} className={`${style.navbar__navOption} ${style.navbar_background}`}>
                        <p className={style.navbar__text}>Cerrar sesión</p>
                    </div>
                    :
                    <NavLink to={`/login`} className={`${style.navbar__navOption} ${style.navbar_background}`} activeClassName={style.navbar_activated}>
                        <p className={style.navbar__text}>Iniciar sesión</p>
                    </NavLink>
                )}
            </div>
        </header>
    );
};

export default Navbar;
