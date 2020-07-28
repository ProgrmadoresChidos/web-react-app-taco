import React from 'react';
import './App.css';

import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar';
import Routes from './routes/Routes';

function App() {
  return (
    <div className="App animated fadeIn">
      <Navbar />
        <Routes />
      <Footer />
    </div>
  );
}

export default App;
