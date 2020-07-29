import React from 'react'
import Maps from '../../components/maps/maps';
import { IMarks } from '../../models/marks/marks';

export default function Ubication() {

    const ubicaciones: IMarks[] = [
        {
            lat: 21.902237, 
            lng: -102.294313,
            name: "Roberto"
        },
        {
            lat: 21.910659, 
            lng: -102.313731,
            name: "jorjais"
        },
        {
            lat: 21.920129, 
            lng: -102.293814,
            name: "Nestor"
        }
    ]

    return (
        <div>
            <h1>Ubication works</h1>
            <Maps locales={ ubicaciones }></Maps>
        </div>
    )
}
