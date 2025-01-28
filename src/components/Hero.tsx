import React from 'react';

const Hero = () => {
  const scrollToGallery = () => {
    const gallery = document.getElementById('gallery');
    if (gallery) {
      const navbarHeight = 64;
      const elementPosition = gallery.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="home" className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="Art Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="relative flex items-center justify-center h-full">
        <div className="text-center text-white px-4">
          <div className="mb-8 flex justify-center">
            <img 
              src="/meraki-logo.png" 
              alt="Meraki Logo" 
              className="w-32 h-32 md:w-40 md:h-40"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Meraki Fine Arts Club</h1>
          <p className="text-xl md:text-2xl mb-8">Where Creativity Knows No Bounds</p>
          <button
            onClick={scrollToGallery}
            className="bg-rose-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-rose-600 transition duration-300 transform hover:scale-105"
          >
            Explore Our Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;