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
            <p>La</p>
          </div>
          <div className="portada__secondTitle">
            <p>App del taco</p>
          </div>
          <div className="portada__thirdTitle">
            <p>Aguascalientes</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};
