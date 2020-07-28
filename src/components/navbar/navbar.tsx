import React from "react";
import { NavLink } from 'react-router-dom';
import style from "./navbar.module.css";

const Navbar = () => {

    return (
        <header className={ `${style.navbar} ${style.navbar_background}` }>
            <div className={ style.navbar__contentWrapper }>
                <NavLink exact to="/" className={ `${style.navbar__navOption} ${style.navbar_background} `} activeClassName={style.navbar_activated}>
                    <p className={ style.navbar__text }>Inicio</p>
                </NavLink>
                <NavLink exact to="/ubicacion" className={ `${style.navbar__navOption} ${style.navbar__background}` } activeClassName={style.navbar_activated}>
                    <p className={ style.navbar__text }> Ubicación & Horarios</p>
                </NavLink> 
                <NavLink exact to="/menu" className={ `${style.navbar__navOption} ${style.navbar_background}`} activeClassName={style.navbar_activated}>
                    <p className={ style.navbar__text }>Menú</p>
                </NavLink>
            </div>
        </header>
    );
};

export default Navbar;
