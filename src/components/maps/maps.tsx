import React, { FunctionComponent } from 'react'
import style from './maps.module.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker';
import { Ubicaciones } from '../../models/marks/ubicaciones';
import { environment } from '../../environment/environment';


type MapsProps = {
    locales: Ubicaciones[]
}

const Maps: FunctionComponent<MapsProps> = ({ locales }) => {

    // const [center, setCenter] = useState({ lat: 21.885516, lng: -102.291693 });
    // const [zoom, setZoom] = useState(12);
    const zoom = 12;
    const API_KEY = environment.GOOGLE_API_KEY;

    return (
        <div className={style.content}>
            <div className={style.contentWrapper}>
                <div className={style.maps}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: API_KEY }}
                        defaultCenter={environment.center}
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
