import React, { FunctionComponent } from "react";

// Styles
import styles from "./parallax.module.css";

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
        className={`${styles.parallax} animated fadeIn faster`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          ...style,
        }}
      >
        {children}
      </div>
      <div className={styles.separador}></div>
    </>
  );
};
