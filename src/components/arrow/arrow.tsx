import React, { useState } from 'react'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './arrow.module.css';

const Arrow = () => {

    const [showArrow, setShowArrow] = useState(false);

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

    window.addEventListener('scroll', checkScrollTop)

    const icon = <FontAwesomeIcon 
        icon={faArrowUp} 
        size="2x" 
        onClick={scrollTop}
        style={{display: showArrow ? 'flex' : 'none'}}
        className={style.scrollArr} />;

    return (
        <div>
            {icon}
        </div>
    )
}

export default Arrow;
