import React from "react";
import "./navbar.css";

const Navbar = () => {

    const handleClick = (cadena: string) => {
        console.info(cadena);
    }

    return (
        // <div>
        <div className="navbar navbar--background">
            <div className="navbar__contentWrapper">
                <div className="navbar__navOption navbar--background" onClick={() => handleClick('Inicio')}>
                    <p className="navbar__text">Inicio de Aplicación</p>
                </div>
                <div className="navbar__navOption navbar--background navbar--activated" onClick={() => handleClick('Ubicación y horarios')}>
                    <p className="navbar__text">Ubicación y Horarios</p>
                </div>
                <div className="navbar__navOption navbar--background" onClick={() => handleClick('Manú')}>
                    <p className="navbar__text">Menú Principal</p>
                </div>
            </div>
        </div>
        // </div>
    );
};

export default Navbar;
