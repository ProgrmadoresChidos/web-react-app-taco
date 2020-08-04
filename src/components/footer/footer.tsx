import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

// Components
import Input from '../form/input/input';
import Arrow from '../arrow/arrow';

// Styles
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div>
      <Arrow></Arrow>
      <footer className={`${styles.footer} ${styles.footer_background}`}>
        <div className={`${styles.footer__info} ${styles.footer_paddingVertical}`}>
          <div className={styles.footer__info__socialNetworks}>
            <div className={`${styles.footer__info__socialNetworks__iconsWrapper} ${styles.footer_textColor}`}>
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <div className={`${styles.footer__info__text} ${styles.footer_textColor}`}>
            <FontAwesomeIcon icon={faCopyright} />
            <p>2023 by La App del taco. Orgullosamente creado por Programadores Chidos</p>
          </div>
        </div>
        <div className={`${styles.footer__contact} ${styles.footer_alignLeft} ${styles.footer_paddingVertical}`}>
          <div className={`${styles.footer__contact__form} ${styles.footer_textColor}`}>
            <p className={styles.footer__contact__form_text}>Unete a nuestra lista de correo</p>
            <div className={styles.footer__contact__form__fields}>
              <Input
                placeholder="Ingresa tu email aqui*"
                style={{
                  marginRight: 10,
                }}
              />
              <button className={`${styles.footer__contact__form_button} ${styles.footer_background} ${styles.footer_textColor}`}>Unirse</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;