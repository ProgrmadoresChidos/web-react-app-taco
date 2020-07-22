import React from 'react'
import { Address } from '../../components/address/address';
import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';

function Index() {

    const negocio : IDatoNegocio = {
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
        <div>
            <Address address = { negocio.address } phoneNumber = { negocio.phoneNumber} email = { negocio.email} horarios = { negocio.horarios } />
        </div>
    )
}

export default Index
