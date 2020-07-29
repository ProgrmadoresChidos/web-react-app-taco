import React, { FunctionComponent } from 'react'

// Styles
import styles from './menu-section-item.module.css';

type MenuSectionItemProps = {
  name: string,
  description?: string,
  precio: number,
};

export const MenuSectionItem: FunctionComponent<MenuSectionItemProps> = ({ name, description = '', precio }) => {
  return (
    <div className={styles.menuSectionItem}>
      <h6>{name}</h6>
      <p className={styles.menuSectionItem_text}>{description}</p>
      <p>{precio}</p>
    </div>
  )
}
