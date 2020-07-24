import React from 'react';
import './App.css';
import Footer from './components/footer/footer'

//import components
import Navbar from './components/navbar/navbar';
import Index from './pages/main-page/index';
// import Ubication from './pages/ubication-more-info/ubication';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Index />
      {/* <Ubication /> */}
      <Footer />
    </div>
  );
}

export default App;
