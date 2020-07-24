import React, { Suspense } from 'react'
import Comer from '../../components/comer/comer';
import { IDatoNegocio } from '../../models/negocio/IDatoNegocio';
import { Portada } from '../../components/portada/portada';
const Address = React.lazy(() =>  import ('../../components/address/address') );

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
            <Suspense fallback={<h1>Loading........</h1>}>
                <Portada />
                <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
                <Comer />
                <Address address={negocio.address} phoneNumber={negocio.phoneNumber} email={negocio.email} horarios={negocio.horarios} />
            </Suspense>
        </div>
    )
}

export default Index
