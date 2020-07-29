import React from 'react';

// Components
import { Parallax } from '../parallax/parallax';

// Styles
import styles from './comer.module.css';

export default function Comer() {
  return (
    <Parallax
      backgroundImage="https://previews.123rf.com/images/vasiliybudarin/vasiliybudarin1711/vasiliybudarin171100040/89718507-tacos-mexicanos-con-carne-picada-verduras-y-salsa-tacos-al-pastor-en-fondo-r%C3%BAstico-azul-de-madera-vista-.jpg"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className={styles.content}>
        <div className={`${styles.content__square} ${styles.content__square_bottom}`}>
          <div className={styles.content__square__diamond} />
          <p className={styles.conent__square__text}>Comer aqui</p>
        </div>
        <div className={styles.content__square}>
          <div className={styles.content__square__diamond} />
          <p className={styles.conent__square__text}>Pedir para llevar</p>
        </div>
      </div>
    </Parallax >
  )
}
