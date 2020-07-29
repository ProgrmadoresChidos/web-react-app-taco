import React, { useState, FunctionComponent } from 'react'
import style from './maps.module.css';
import GoogleMapReact from 'google-map-react';
import Marker from '../marker/marker';
import { IMarks } from '../../models/marks/marks';


type MapsProps = {
    locales: IMarks[]
}

const Maps: FunctionComponent<MapsProps> = ({ locales }) => {

    const [center, setCenter] = useState({ lat: 21.885516, lng: -102.291693 });
    const [zoom, setZoom] = useState(12);
    const API_KEY = 'AIzaSyD9ojpstGgDd6CI2r8c8UhzEHOo8MKn6pQ';

    return (
        <div className={style.content}>
            <div className={style.contentWrapper}>
                <div className={style.maps}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: API_KEY }}
                        defaultCenter={center}
                        defaultZoom={zoom}
                    >
                        {locales.map((local, i) => <Marker key={i} lat={local.lat} lng={local.lng} name={local.name}></Marker>)}
                    </GoogleMapReact>
                </div>
            </div>
        </div>
    )
}
export default Maps;
