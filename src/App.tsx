import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/footer'

//import components
import Navbar from './components/navbar/navbar';
import Index from './pages/main-page/index';
import Ubication from './pages/ubication-more-info/ubication';

function App() {
  return (
    <div className="App animated fadeIn">
      <Navbar />
      <Switch>
        {/* <Index /> */}
        <Route exact path="/" component={Index}></Route>
        <Route exact path="/ubicacion" component={Ubication}></Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
