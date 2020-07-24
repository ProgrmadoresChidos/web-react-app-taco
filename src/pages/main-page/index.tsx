import React from 'react'
import { Address } from '../../components/address/address';
import Comer from '../../components/comer/comer';
import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';
import { Portada } from '../../components/portada/portada';

// Styles
import './index.css';

function Index() {

    const negocio: IDatoNegocio = {
        address: "hola mundo",
        phoneNumber: "string",
        email: "string",
        horarios: [
            {
                dias: "string",
            }
        ]
    }

    return (
        <div className="body">
            <Portada />
            <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
            <Comer />
            <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
        </div>
    )
}

export default Index
