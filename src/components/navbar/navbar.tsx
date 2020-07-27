import React from "react";
import style from "./navbar.module.css";

const Navbar = () => {

    const handleClick = (cadena: string) => {
        console.info(cadena);
    }

    return (
        <header className={ `${style.navbar} ${style.navbar__background}` }>
            <div className={ style.navbar__contentWrapper }>
                <div className={ `${style.navbar__navOption} ${style.navbar__background} ` } onClick={() => handleClick('Inicio')}>
                    <p className={ style.navbar__text }>Inicio</p>
                </div>
                <div className={ `${style.navbar__navOption} ${style.navbar__background} ${style.navbar__activated}` } onClick={() => handleClick('Ubicación y horarios')}>
                    <p className={ style.navbar__text }>Ubicación & Horarios</p>
                </div>
                <div className={ `${style.navbar__navOption} ${style.navbar__background}` } onClick={() => handleClick('Manú')}>
                    <p className={ style.navbar__text }>Menú</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
