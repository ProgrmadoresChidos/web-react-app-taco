import React, { lazy, useEffect } from 'react'
import { Ubicaciones } from '../../../../models/marks/ubicaciones';
import Loading from '../../../../components/loading/loading';
const Address = lazy(() => import('../../../../components/address/address'));
const Maps = lazy(() => import('../../../../components/maps/maps'));

export default function Ubication() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    console.info(process.env.React_App_NOMBRE);

    const ubicaciones: Ubicaciones[] = [
        {
            nombre: "Roberto",
            calle: "Avenida Test",
            codigoPostal: 123131,
            colonia: "siempre chidos",
            correo: "hola@123.com",
            telefonos: ["1231", "189723", "22"],
            horarios: [
                "Lunes– Viernes 07:00AM – 10:00PM",
                "Sábado 09:00AM – 10:00PM",
                "Domingo 08:00PM –11:00PM"
            ],
            geoLocalización: {
                lat: 21.902237,
                lng: -102.294313
            }
        },
        {
            nombre: "Jorjais",
            calle: "Avenida Test",
            codigoPostal: 123131,
            colonia: "siempre chidos",
            correo: "hola@123.com",
            telefonos: ["1231", "189723", "11"],
            horarios: [
                "Lunes– Viernes 07:00AM – 10:00PM",
                "Sábado 09:00AM – 10:00PM",
                "Domingo 08:00PM –11:00PM"
            ],
            geoLocalización: {
                lat: 21.910659,
                lng: -102.313731
            }
        },
        {
            nombre: "Nestor",
            calle: "Avenida Test",
            codigoPostal: 123131,
            colonia: "siempre chidos",
            correo: "hola@123.com",
            telefonos: ["1231", "189723", "44"],
            horarios: [
                "Lunes– Viernes 07:00AM – 10:00PM",
                "Sábado 09:00AM – 10:00PM",
                "Domingo 08:00PM –11:00PM"
            ],
            geoLocalización: {
                lat: 21.920129,
                lng: -102.293814
            }
        }
    ]

    return (
        <Loading>
            <Address locales={ubicaciones} subTittle="Aguascalientes" ></Address>
            <Maps locales={ubicaciones}></Maps>
        </Loading>
    )
}
