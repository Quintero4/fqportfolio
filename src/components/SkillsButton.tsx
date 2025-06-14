
import React, { useState } from 'react';
import { Code, Lightbulb } from 'lucide-react';

export const SkillsButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hardSkills = [
    'HTML, CSS, JavaScript',
    'Node.js, PHP',
    'MySQL',
    'Git y GitHub',
    'Depuración y optimización'
  ];

  const softSkills = [
    'Adaptabilidad',
    'Trabajo en equipo',
    'Gestión del tiempo',
    'Comunicación efectiva'
  ];

  return (
    <div className="relative">
      <button
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        className={`flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg ${
          isExpanded ? 'scale-105' : ''
        }`}
      >
        <Code size={18} />
        <span>Skills</span>
      </button>

      {/* Skills Dropdown */}
      <div className={`absolute top-full right-0 mt-2 w-80 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl transition-all duration-300 ${
        isExpanded ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
      }`}>
        <div className="p-4">
          {/* Hard Skills */}
          <div className="mb-4">
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <Code size={16} />
              Hard Skills
            </h4>
            <ul className="space-y-1">
              {hardSkills.map((skill, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills */}
          <div>
            <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
              <Lightbulb size={16} />
              Soft Skills
            </h4>
            <ul className="space-y-1">
              {softSkills.map((skill, index) => (
                <li key={index} className="text-gray-300 text-sm">
                  • {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
