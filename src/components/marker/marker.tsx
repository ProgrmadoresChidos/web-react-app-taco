import React, { FunctionComponent } from 'react'
import style from './marker.module.css';

type MarkerProps = {
    lat: number,
    lng: number, 
    name: string
}

const Marker: FunctionComponent<MarkerProps> = ({ lat, lng, name }) => {
    return (
        <div>
            <div className={`${style.pin} ${style.bounce}`} title={ name } />
            <div className={style.pulse}></div>
        </div>
    )
}

export default Marker;
