
import React, { useState } from 'react';
import { Instagram, Linkedin, Github, MessageCircle, Home } from 'lucide-react';

export const FloatingContactButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contacts = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#', // Usuario añadirá su enlace aquí
      color: 'bg-gradient-to-r from-purple-500 to-pink-500'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: '#', // Usuario añadirá su enlace aquí
      color: 'bg-blue-600'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://quintero4.github.io/portfolio/', // Enlace de GitHub del CV
      color: 'bg-gray-800'
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: 'https://wa.me/34652337340', // Número de WhatsApp del CV
      color: 'bg-green-500'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="flex flex-col items-end gap-3">
        {/* Contact Links - Only visible when expanded */}
        <div className={`flex flex-col gap-2 transition-all duration-300 ${
          isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {contacts.map((contact) => (
            <a
              key={contact.name}
              href={contact.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full ${contact.color} text-white shadow-lg hover:scale-110 transform transition-all duration-200 hover:shadow-xl`}
              title={contact.name}
            >
              <contact.icon size={20} />
            </a>
          ))}
        </div>

        {/* Main Toggle Button */}
        <button
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
          className={`p-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transform transition-all duration-300 ${
            isExpanded ? 'scale-110 rotate-45' : 'hover:scale-105'
          }`}
          aria-label="Contact"
        >
          <Home size={24} />
        </button>
      </div>
    </div>
  );
};
