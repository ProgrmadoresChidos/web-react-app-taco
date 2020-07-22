import React from 'react';
// Components
import Input from '../form/input/input';
// Styles
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer footer--background">
      <div className="footer__content footer__content--alignRight footer__content--paddingVertical">
        <p>Contenido</p>
      </div>
      <div className="footer__content footer__content--alignLeft footer__content--paddingVertical">
        <div className="footer__content__contactForm">
          <p>Unete a nuestra lista de correo</p>
          <div className="footer__content__contactForm__fields">
            <Input
              placeholder="Ingresa tu email aqui*"
              style={{
                marginRight: 10,
              }}
            />
            <button>Unirse</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;