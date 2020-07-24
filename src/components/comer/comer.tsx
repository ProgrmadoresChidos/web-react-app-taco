import React from 'react';

// Components
import { Parallax } from '../parallax/parallax';

// Styles
import './comer.css';

export default function Comer() {
  return (
    <Parallax
      backgroundImage="https://previews.123rf.com/images/vasiliybudarin/vasiliybudarin1711/vasiliybudarin171100040/89718507-tacos-mexicanos-con-carne-picada-verduras-y-salsa-tacos-al-pastor-en-fondo-r%C3%BAstico-azul-de-madera-vista-.jpg"
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div className="content">
        <div className="content__square content__square--bottom">
          <div className="content__square__diamond" />
          <p className="conent__square__text">Comer aqui</p>
        </div>
        <div className="content__square">
          <div className="content__square__diamond" />
          <p className="conent__square__text">Pedir para llevar</p>
        </div>
      </div>
    </Parallax>
  )
}
