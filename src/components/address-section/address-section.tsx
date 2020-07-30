import React, { FunctionComponent } from 'react'
import style from './address-section.module.css';
import { Ubicaciones } from '../../models/marks/ubicaciones';

type PropAddressSection = {
    local: Ubicaciones;
}

const AddressSection: FunctionComponent<PropAddressSection> = ({ local }) => {
    return (
        <div className={` ${style.location__container}`}>
            <div className={`${style.location__container_direction}`}>
                <span className={style.location__address_span}>Dirección</span>
                <p className={style.container__paragraph}>{local.nombre}</p>
                <p className={style.container__paragraph}>{`${local.calle} ${local.codigoPostal}`}</p>
                <p className={style.container__paragraph}>{local.colonia}</p>
                <p className={style.container__paragraph}>{`tel:${local.telefonos.join(' tel:')}`}</p>
                <p className={style.container__paragraph}>{local.correo}</p>
            </div>
            <div className={` ${style.location__container_direction}`}>
                <span className={style.location__address_span}>Horarios</span>
                {local.horarios.map((horario, i) => (
                    <p key={i} className={style.container__paragraph}>{ horario }</p>
                ))}
            </div>
        </div>
    )
}

export default AddressSection;
