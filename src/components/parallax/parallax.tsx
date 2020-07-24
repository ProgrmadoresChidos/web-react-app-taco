import React, { FunctionComponent } from "react";
import "./parallax.css";

type ParallaxProps = {
  backgroundImage: string;
  style?: object;
};

export const Parallax: FunctionComponent<ParallaxProps> = ({
  children,
  backgroundImage,
  style = {},
}) => {
  return (
    <>
      <div
        className="parallax"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...style,
        }}
      >
        {children}
      </div>
      <div className="separador"></div>
    </>
  );
};
