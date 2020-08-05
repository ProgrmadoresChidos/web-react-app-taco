import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { Link, useHistory, useLocation } from 'react-router-dom';

// Styles
import styles from './page-not-found.module.css';

const PageNotFound: FunctionComponent = () => {

  const location = useLocation();
  const description = `La pagina ${location.pathname} no la pudimos encontrar.`;

  const history = useHistory();
  const goBack = () => history.goBack();

  return (
    <div className={styles.pageNotFound}>
      <div className={styles.pageNotFound__container}>
        <div className={`${styles.pageNotFound__textContainer} ${styles.pageNotFound__container_right}`}>
          <p className={styles.pageNotFound__404}>404</p>
        </div>
        <div className={styles.pageNotFound_line} />
        <div className={`${styles.pageNotFound__textContainer} ${styles.pageNotFound__container_left}`}>
          <p className={`${styles.pageNotFound_text} ${styles.pageNotFound__title}`}>¡LO SENTIMOS!</p>
          <p className={styles.pageNotFound_text}>{description}</p>
          <Link className={styles.pageNotFound__button} to="#" onClick={goBack}>
            <FontAwesomeIcon icon={faChevronLeft} style={{ paddingRight: 5 }} />
            Atras
          </Link>
        </div>
      </div>
    </div>
  )
}

export { PageNotFound as default };