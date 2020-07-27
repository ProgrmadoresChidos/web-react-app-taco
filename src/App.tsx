import React from 'react';
import './App.css';
import Footer from './components/footer/footer'

//import components
import Navbar from './components/navbar/navbar';
import Index from './pages/main-page/index';

function App() {
  return (
    <div className="App animated fadeIn">
      <Navbar />
      <Index />
      <Footer />
    </div>
  );
}

export default App;
