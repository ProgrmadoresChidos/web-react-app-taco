import React, { FunctionComponent } from 'react'
import style from './maps.module.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker';
import { Ubicaciones } from '../../models/marks/ubicaciones';


type MapsProps = {
    locales: Ubicaciones[]
}

const Maps: FunctionComponent<MapsProps> = ({ locales }) => {

    const zoom = 12;
    const API_KEY = 'AaIzaSyDEsK7PQRs48b7eM5eVCaUj4GqEo5eKOE';
    const center = { lat: 21.885516, lng: -102.291693 }

    return (
        <div className={style.content}>
            <div className={style.contentWrapper}>
                <div className={style.maps}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: API_KEY }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        {locales.map((local, i) => <Marker key={i} lat={local.geoLocalización.lat} lng={local.geoLocalización.lng} name={local.nombre}></Marker>)}
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}
export default Maps;
