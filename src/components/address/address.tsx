import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import style from './address.module.css';
import { Ubicaciones } from '../../models/marks/ubicaciones';
import AddressSection from '../address-section/address-section';

type PropsAddress = {
    locales: Ubicaciones[];
    subTittle: string;
    tittle?: {
        show: boolean,
        text: string
    };
    button?: {
        show: boolean,
        text: string,
        path: string
    };
}

const Address: FunctionComponent<PropsAddress> = ({ locales, subTittle, tittle = { show: false, text: "" }, button = { show: false, text: "", path: "/inicio" } }) => {
    return (
        <div className={style.location}>
            <div className={style.location__contentWrapper}>
                {tittle.show &&
                    <div className={style.location__tittle}>
                        <div className={style.location__tittle_background}>
                            <span className={style.location__tittle_span}>{tittle.text}</span>
                        </div>
                    </div>
                }
                <div className={style.location__subTittle}>
                    <p className={style.location__subtittle_span}>{subTittle}</p>
                </div>
                {locales.map((local, i) => ( 
                    <AddressSection key={i} local= {local}/>
                ))}
                {button.show &&
                    <div className={style.location__moreInfo}>
                        <NavLink to={button.path} className={style.location__button}>{button.text}</NavLink>
                    </div>
                }
            </div>
        </div>
    )
}
export default Address;
// componente para mostrar información

