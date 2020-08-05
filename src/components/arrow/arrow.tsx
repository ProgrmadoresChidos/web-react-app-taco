import React, { useState, useEffect } from 'react'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './arrow.module.css';

const Arrow = () => {

    const [showArrow, setShowArrow] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => {
            window.removeEventListener('scroll', checkScrollTop);
        }
    });

    const checkScrollTop = () => {

        if (!showArrow && ((window.innerHeight + window.pageYOffset) > (document.body.offsetHeight - 150))) {
            setShowArrow(true);
        }
        else if (showArrow && ((window.innerHeight + window.pageYOffset) < (document.body.offsetHeight - 150))) {
            setShowArrow(false);
        }

    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const icon = <FontAwesomeIcon
        icon={faAngleUp}
        size="2x"
        onClick={scrollTop}
        style={{ display: showArrow ? 'flex' : 'none' }}
        className={style.scrollArr} />;

    return (
        <div className={style.container}>
            <div className={style.container__arrow}>
                {icon}
            </div>
        </div>
    )
}

export default Arrow;
