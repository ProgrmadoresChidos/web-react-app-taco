import React, { FunctionComponent } from 'react';

// Components
import { MenuSectionItem } from './menu-section-item/menu-section-item';

// Styles
import styles from './menu-section.module.css';

type MenuSectionProps = {
  title: string;
  description?: string;
  items: Array<{
    name: string;
    description?: string;
    precio: number;
  }>;
};

export const MenuSection: FunctionComponent<MenuSectionProps> = ({ title, description, items }) => {
  return (
    <div className={styles.menuSection}>
      <div className={styles.menuSection__header}>
        <h2>{title}</h2>
        <p className={styles.menuSection_text}>{description}</p>
        <div className={styles.menuSection_line} />
      </div>
      <div className={styles.menuSection__content}>
        {
          items.map((item, i)=> (
            <MenuSectionItem key={ i } name={item.name} description={item.description} precio={item.precio} />
          ))
        }
      </div>
    </div>
  );
};
