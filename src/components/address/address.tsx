import React, { FunctionComponent } from 'react';
import style from './address.module.css';
import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';

const Address: FunctionComponent<IDatoNegocio> = ( { address, phoneNumber, email, horarios } ) => {
    return (
        <div className={ style.location }>
            <div className={ style.location__contentWrapper }>
                <div className={ style.location__tittle }>
                    <div className={ style.location__tittle_background }>
                        <span className={ style.location__tittle_span }>Ubicación & Horarios</span>
                    </div>
                </div>
                <div className={ style.location__subTittle }>
                    <p className={ style.location__subtittle_span }>¡Descubre un sabor inolvidable!</p>
                </div>
                <div className={ style.location__container }>
                    <div className={ style.location__container_direction }>
                        <span className={ style.location__address_span }>Dirección</span>
                        <p className={ style.location__address_p }>Av. Los Rosales 122</p>
                        <p className={ style.location__address_p }>28021, Madrid.</p>
                        <p className={ style.location__address_p }>info@misitio.com // Tel: 914-123-456</p>                
                    </div>
                    <div className={ style.location__container_direction }>
                        <span className= { style.location__address_span }>Horarios</span>
                        <p className= { style.location__address_p }>Lunes– Viernes 07:00AM – 10:00PM</p>
                        <p className= { style.location__address_p }>Sábado 09:00AM – 10:00PM</p>
                        <p className= { style.location__address_p }>Domingo 08:00PM –11:00PM</p>
                    </div>
                </div>
                <div className={ style.location__moreInfo}>
                    <a href="/" className={ style.location__button }>Más información</a>
                </div>
            </div>
        </div>
    )
}
export default Address;
// componente para mostrar información

