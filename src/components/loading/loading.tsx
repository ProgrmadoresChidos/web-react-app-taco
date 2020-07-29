import React, { Suspense } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import style from './loading.module.css';

const Loading = ( {children} ) => {
    const icon = <FontAwesomeIcon icon={faCircleNotch} size="4x" spin />;
    const loadElement = (<div className={style.content}>
                            <div className={style.content__loading}>
                                <h1>Cargando</h1>
                                { icon }
                            </div>
                        </div>);

    return (
        <Suspense fallback={ loadElement }>
            { children}
        </Suspense>
    );
};

export default Loading;
