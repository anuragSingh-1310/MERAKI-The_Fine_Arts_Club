import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const artworks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Abstract Harmony",
      artist: "Maria Chen"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Color Symphony",
      artist: "John Smith"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Urban Expression",
      artist: "David Lee"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1501472312651-726afe119ff1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Digital Dreams",
      artist: "Emma Wilson"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Nature's Canvas",
      artist: "Sophie Taylor"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      title: "Modern Perspectives",
      artist: "Alex Johnson"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Our Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              className="group relative overflow-hidden rounded-lg shadow-lg animate-fade-in cursor-pointer"
              style={{ animationDelay: `${index * 150}ms` }}
              onClick={() => setSelectedImage(artwork)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedImage(artwork);
                }
              }}
            >
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-center text-white transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{artwork.title}</h3>
                  <p className="text-sm">by {artwork.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-3xl w-full animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="w-full rounded-t-lg"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600">Artist: {selectedImage.artist}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;