import React, { lazy } from 'react'
// import Comer from '../../components/comer/comer';
import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';
import Loading from '../../components/loading/loading';
// import { Portada } from '../../components/portada/portada';
// import Address from '../../components/address/address';
const Address = React.lazy(() => import('../../components/address/address'));
const Portada = lazy(() => import('../../components/portada/portada'));
const Comer = lazy(() => import('../../components/comer/comer'));

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
            <Loading>
                <Portada />
                <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
                <Comer />
                <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
            </Loading>
        </div>
    )
}

export default Index
