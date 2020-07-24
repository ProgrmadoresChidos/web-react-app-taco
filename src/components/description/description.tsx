import React, { FunctionComponent } from 'react';
import './description.css';
// import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';

type DescProps = {
    tittle: string;
    moreInfo: string;
    path?: string;
    hasButton?: boolean;
    bottonText?: string;  
}

const Description: FunctionComponent<DescProps> = ( { tittle, moreInfo, path = "/", hasButton = false, bottonText = "" } ) => {
    return (
        <div className="location">
            <div className="location__contentWrapper">
                <div className="location__tittle">
                    <div className="location__tittle_background">
                        <span className="location__tittle_span">{ tittle }</span>
                    </div>
                </div>
                <div className="location__subTittle">
                    <p className="location__subtittle_span">{ moreInfo }</p>
                </div>
                <div className="location__container">
                    <div className="location__container_direction">
                        <span className="location__address_span">Dirección</span>
                        <p className="location__address_p">Av. Los Rosales 122</p>
                        <p className="location__address_p">28021, Madrid.</p>
                        <p className="location__address_p">info@misitio.com // Tel: 914-123-456</p>                
                    </div>
                    <div className="location__container_direction">
                        <span className="location__address_span">Horarios</span>
                        <p className="location__address_p">Lunes– Viernes 07:00AM – 10:00PM</p>
                        <p className="location__address_p">Sábado 09:00AM – 10:00PM</p>
                        <p className="location__address_p">Domingo 08:00PM –11:00PM</p>
                    </div>
                </div>
                { hasButton &&
                    <div className="location__moreInfo">
                        <a href={ path } className="location__button">{ bottonText }</a>
                    </div>
                }
            </div>
        </div>
    )
}
export default Description;

