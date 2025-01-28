import React, { useState } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Art Exhibition",
      date: "March 15, 2024",
      time: "6:00 PM",
      location: "Main Gallery Hall",
      description: "Join us for our annual exhibition featuring works from our talented members.",
      details: "This year's exhibition will showcase over 100 artworks from 50 different artists. The event will include live music, refreshments, and an opportunity to meet the artists.",
      address: "123 Art Street, Creative District"
    },
    {
      id: 2,
      title: "Workshop: Oil Painting Basics",
      date: "March 20, 2024",
      time: "2:00 PM",
      location: "Studio 2",
      description: "Learn the fundamentals of oil painting in this hands-on workshop.",
      details: "Perfect for beginners, this workshop will cover color theory, brush techniques, and composition. All materials will be provided.",
      address: "456 Gallery Lane, Art District"
    }
  ];

  const pastEvents = [
    {
      id: 1,
      title: "Winter Art Showcase",
      date: "December 10, 2023",
      location: "Community Center",
      description: "A celebration of winter-themed artworks by our members.",
      gallery: [
        "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    },
    {
      id: 2,
      title: "Digital Art Workshop",
      date: "January 15, 2024",
      location: "Virtual Event",
      description: "Introduction to digital art tools and techniques.",
      gallery: [
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      ]
    }
  ];

  return (
    <section id="events" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Upcoming Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-white rounded-lg shadow-lg p-6 hover-lift hover-glow transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedEvent(event)}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedEvent(event);
                  }
                }}
              >
                <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
                <div className="flex items-center mb-2 text-rose-500">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center mb-2 text-rose-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center mb-3 text-rose-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in">Past Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div 
                key={event.id} 
                className="bg-gray-50 rounded-lg p-6 hover-lift transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                <p className="text-rose-500 mb-2">{event.date}</p>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {event.gallery.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt={`${event.title} gallery ${i + 1}`}
                      className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity duration-300"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Event Details Modal */}
      {selectedEvent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedEvent(null)}
        >
          <div 
            className="relative bg-white rounded-lg max-w-2xl w-full animate-fade-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedEvent(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">{selectedEvent.title}</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-rose-500">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center text-rose-500">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center text-rose-500">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>{selectedEvent.address}</span>
                </div>
              </div>
              <p className="text-gray-600 mb-6">{selectedEvent.details}</p>
              <button
                className="w-full bg-rose-500 text-white py-2 rounded-lg hover:bg-rose-600 transition-colors duration-300"
                onClick={() => {
                  // Here you would typically integrate with a registration system
                  alert('Registration feature coming soon!');
                }}
              >
                Register for Event
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;