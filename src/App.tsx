import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Events from './components/Events';
import News from './components/News';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Gallery />
      <Events />
      <News />
      <Footer />
    </div>
  );
}

export default App;