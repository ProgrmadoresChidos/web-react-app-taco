import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer footer--background">
      <div className="footer__content footer__content--alignRight">
        <p>Contenido</p>
      </div>
      <div className="footer__content footer__content--alignLeft">
        <div className="footer__content__contactForm">
          <p>Unete a nuestra lista de correo</p>
          <div className="footer__content__contactForm__fields">
            <input />
            <button>Unirse</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;