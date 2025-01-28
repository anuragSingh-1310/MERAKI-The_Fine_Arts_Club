import React from 'react';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Artist Residency Program Announced",
      date: "February 28, 2024",
      summary: "We're excited to announce our new artist residency program starting this summer.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      title: "Collaboration with Local Schools",
      date: "February 25, 2024",
      summary: "Meraki launches art education initiative with local schools to nurture young talent.",
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      title: "Member Achievement: International Recognition",
      date: "February 20, 2024",
      summary: "Club member Sarah Chen wins prestigious international art competition.",
      image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover-lift hover-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <p className="text-sm text-rose-500 mb-2">{item.date}</p>
                <h3 className="text-xl font-semibold mb-3 hover:text-rose-500 transition-colors duration-300">{item.title}</h3>
                <p className="text-gray-600">{item.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;