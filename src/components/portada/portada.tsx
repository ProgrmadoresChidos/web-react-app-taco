import React from "react";
import "./portada.css";
import { Parallax } from "../parallax/parallax";

export const Portada = () => {
  const img = "http://localhost:3000/assets/img/portada.jpg";

  return (
    <Parallax backgroundImage={img}>
      <div className="portada">
        <div className="portada__wrapper">
          <div className="portada__firstTitle">
            <p className="portada__text">La</p>
          </div>
          <div className="portada__secondTitle">
            <p className="portada__text">App del taco</p>
          </div>
          <div className="portada__thirdTitle">
            <p className="portada__text">Aguascalientes</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
