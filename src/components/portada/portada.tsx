import React from "react";
import style from "./portada.module.css";
import { Parallax } from "../parallax/parallax";

const Portada = () => {

  const img = "/assets/img/portada-min.jpg";

  return (
    <Parallax backgroundImage={img}>
      <div className={style.portada}>
        <div className={style.portada__wrapper}>
          <div className={style.portada__firstTitle}>
            <p className={style.portada__text}>La</p>
          </div>
          <div className={style.portada__secondTitle}>
            <p className={style.portada__text}>App del taco</p>
          </div>
          <div className={style.portada__thirdTitle}>
            <p className={style.portada__text}>Aguascalientes</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Portada;