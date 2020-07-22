import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

// Components
import Input from '../form/input/input';

// Styles
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer footer--background">
      <div className="footer__info footer--paddingVertical">
        <div className="footer__info__socialNetworks">
          <div className="footer__info__socialNetworks__iconsWrapper footer--textColor">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="footer__info__text footer--textColor">
          <FontAwesomeIcon icon={faCopyright} />
          <p>2023 by La App del taco. Orgullosamente creado por Programadores Chidos</p>
        </div>
      </div>
      <div className="footer__contact footer--alignLeft footer--paddingVertical">
        <div className="footer__contact__form footer--textColor">
          <p className="footer__contact__form--text">Unete a nuestra lista de correo</p>
          <div className="footer__contact__form__fields">
            <Input
              placeholder="Ingresa tu email aqui*"
              style={{
                marginRight: 10,
              }}
            />
            <button className="footer__contact__form--button footer--background footer--textColor">Unirse</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;