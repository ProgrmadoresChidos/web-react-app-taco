import React from 'react';
import './App.css';
import Footer from './components/footer/footer'

//import components
import Navbar from './components/navbar/navbar';
// import Index from './pages/main-page/index';
import { Menu } from './pages/menu/menu';

function App() {
  return (
    <div className="App animated fadeIn">
      <Navbar />
      <Menu />
      {/* <Index /> */}
      <Footer />
    </div>
  );
}

export default App;
