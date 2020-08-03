import React, { FunctionComponent, useEffect } from 'react'

// Components
import { MenuSection } from '../../components/menu-section/menu-section';

// Styles
import styles from './menu.module.css';

//<a href='https://www.freepik.es/fotos/restaurante'>Foto de Restaurante creado por timolina - www.freepik.es</a>
const ITEMS = [
  {
    name: 'Pastor',
    description: 'Este es un plato de tu menú. Descríbelo brevemente, ej. Antipasti casero italiano.',
    precio: 15,
  },
  {
    name: 'Bistec',
    description: 'Este es un plato de tu menú. Descríbelo brevemente, ej. Antipasti casero italiano.',
    precio: 15,
  },
  {
    name: 'Bistec',
    description: 'Este es un plato de tu menú. Descríbelo brevemente, ej. Antipasti casero italiano.',
    precio: 15,
  },
]

export const Menu: FunctionComponent = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.menu}>
      <div className={styles.menu_backgroundImage} />
      <div className={styles.menu__wrapper}>
        <div className={styles.menu__title}>
          <h3>Menu</h3>
          <p className={styles.menu_text}>Haz que las personas se emocionen por tu menú y tu comida. Para editar este texto y hacerlo propio, haz clic aquí.</p>
        </div>
        <MenuSection
          title="Tacos"
          description="Esta es una sección de tu menú, personalízala como quieras. Haz un listado de tus entradas, bebidas, pastas o cualquier otro plato."
          items={ITEMS}
        />
        <MenuSection
          title="Tortas"
          description="Esta es una sección de tu menú, personalízala como quieras. Haz un listado de tus entradas, bebidas, pastas o cualquier otro plato."
          items={ITEMS}
        />
      </div>
    </div>
  )
}
