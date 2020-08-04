import React from 'react'
import { useRouteMatch } from "react-router-dom";
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';
import Routes from './routes';

// Styles
import styles from './pages.module.css';

export default function Index() {

    let { path, url } = useRouteMatch();

    return (
        <div className={styles.pages}>
            <Navbar url={url} />
            <Routes path={path} />
            <Footer />
        </div>
    )
}
