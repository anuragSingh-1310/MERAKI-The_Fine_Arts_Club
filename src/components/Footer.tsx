import React from 'react';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const handleContactClick = (type: string) => {
    switch (type) {
      case 'email':
        window.location.href = 'mailto:contact@merakiarts.com';
        break;
      case 'phone':
        window.location.href = 'tel:+1234567890';
        break;
      case 'address':
        window.open('https://maps.google.com/?q=123+Art+Street,Creative+District');
        break;
      default:
        break;
    }
  };

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com'
  };

  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="animate-fade-in">
            <div className="flex items-center mb-4">
              <img 
                src="/meraki-logo.png" 
                alt="Meraki Logo" 
                className="h-10 w-10 mr-2 animate-float"
              />
              <h3 className="text-xl font-semibold">Meraki Fine Arts Club</h3>
            </div>
            <p className="text-gray-400">Where creativity meets community</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <button 
                onClick={() => handleContactClick('email')}
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 w-full text-left"
              >
                <Mail className="h-5 w-5 mr-2" />
                contact@merakiarts.com
              </button>
              <button 
                onClick={() => handleContactClick('phone')}
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 w-full text-left"
              >
                <Phone className="h-5 w-5 mr-2" />
                +123 456 7890
              </button>
              <button 
                onClick={() => handleContactClick('address')}
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300 w-full text-left"
              >
                <MapPin className="h-5 w-5 mr-2" />
                123 Art Street, Creative District
              </button>
            </div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {[
                { icon: Facebook, link: socialLinks.facebook },
                { icon: Instagram, link: socialLinks.instagram },
                { icon: Twitter, link: socialLinks.twitter }
              ].map(({ icon: Icon, link }, index) => (
                <a 
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-rose-500 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p className="hover:text-white transition-colors duration-300">&copy; {new Date().getFullYear()} Meraki Fine Arts Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;