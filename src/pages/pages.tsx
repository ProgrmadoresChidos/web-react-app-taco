import React from 'react'
import { useRouteMatch } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Routes from './routes';
import Arrow from '../components/arrow/arrow';

export default function Index() {

    let { path, url } = useRouteMatch();

    return (
        <div className="App">
            <Navbar url={url}/>
            <Routes path={path} />
            <Arrow></Arrow>
            <Footer />
        </div>
    )
}
