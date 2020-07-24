import React from 'react'
import Comer from '../../components/comer/comer';
import { Portada } from '../../components/portada/portada';
import Description from '../../components/description/description';


function Index() {

    return (
        <div className="body">
            <Portada />
            <Description tittle="Nuestra Historia" moreInfo="PASIÓN POR PIZZA" hasButton={ true } bottonText="Contactanos" path="/"/>
            <Comer />
            <Description tittle="Ubicación & Horarios" 
                        moreInfo="¡DESCUBRE UN SABOR INOLVIDABLE!"
                        hasButton={ true } path="/ubicacion"
                        bottonText="Más Información"/>
        </div>
    )
}

export default Index
