import React from "react";
import "./navbar.css";

const Navbar = () => {

    const handleClick = (cadena: string) => {
        console.info(cadena);
    }

    return (
        <header className="navbar navbar--background">
            <div className="navbar__contentWrapper">
                <div className="navbar__navOption navbar--background" onClick={() => handleClick('Inicio')}>
                    <p className="navbar__text">Inicio</p>
                </div>
                <div className="navbar__navOption navbar--background navbar--activated" onClick={() => handleClick('Ubicación y horarios')}>
                    <p className="navbar__text">Ubicación & Horarios</p>
                </div>
                <div className="navbar__navOption navbar--background" onClick={() => handleClick('Manú')}>
                    <p className="navbar__text">Menú</p>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
