
import React, { useState } from 'react';
import { FileText, Download } from 'lucide-react';

export const CVButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative">
      <a
        href="/lovable-uploads/e7fd1436-4ec6-4257-bacc-42d1be4bcd6e.png"
        download="CurriculumVitae_page-0001.png"
        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${
          isHovered ? 'scale-105' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FileText size={18} />
        <span className={`transition-all duration-300 ${
          isHovered ? 'animate-pulse' : ''
        }`}>
          Currículum
        </span>
        <Download size={16} className={`transition-all duration-300 ${
          isHovered ? 'translate-y-0.5' : ''
        }`} />
      </a>
      
      {/* Hover effect indicator */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg blur opacity-25 transition-opacity duration-300 ${
        isHovered ? 'opacity-75' : 'opacity-0'
      }`} />
    </div>
  );
};
