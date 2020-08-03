import React, { lazy, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom';
//components
import Loading from '../../components/loading/loading';
import { Ubicaciones } from '../../models/marks/ubicaciones';
const Arrow = lazy(() => import('../../components/arrow/arrow'));
const Address = lazy(() => import('../../components/address/address'));
const Portada = lazy(() => import('../../components/portada/portada'));
const Comer = lazy(() => import('../../components/comer/comer'));

function Index() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    let { url } = useRouteMatch();

    const ubicaciones: Ubicaciones[] = [
        {
            nombre: "Jorjais",
            calle: "Avenida Test",
            codigoPostal: 123131,
            colonia: "siempre chidos",
            correo: "hola@123.com",
            telefonos: ["1231", "189723", ""],
            horarios: [
                "Lunes– Viernes 07:00AM – 10:00PM",
                "Sábado 09:00AM – 10:00PM", 
                "Domingo 08:00PM –11:00PM"
            ],
            geoLocalización: {
                lat: 21.910659,
                lng: -102.313731
            }
        }
    ]

    return (
        <div className="body">
            <Loading>
                <Portada />
                <Address 
                    locales = { ubicaciones } 
                    subTittle="¿QUÉ TAL UNA PIZZA PARTY?" 
                    button={{ show: true, text: "Más Información", path: `${url}` }} 
                    tittle={{ show: true, text: "Nuestra Historia"}} />
                <Comer />
                <Address 
                    locales = { ubicaciones } 
                    subTittle="¡DESCUBRE UN SABOR INOLVIDABLE!" 
                    button={{ show: true, text: "Más Información", path: `${url}/ubicacion` }} 
                    tittle={{ show: true, text: "Ubicación & Horarios"}} />
                <Arrow></Arrow>
            </Loading>
        </div>
    )
}

export default Index
