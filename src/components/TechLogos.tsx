
import React, { useEffect, useState } from 'react';

interface TechLogosProps {
  scrollY: number;
}

export const TechLogos = ({ scrollY }: TechLogosProps) => {
  const [visibleLogos, setVisibleLogos] = useState<boolean[]>([]);

  const technologies = [
    { name: 'HTML', color: 'from-orange-500 to-red-500', category: 'Frontend' },
    { name: 'CSS', color: 'from-blue-500 to-blue-600', category: 'Frontend' },
    { name: 'JavaScript', color: 'from-yellow-400 to-yellow-500', category: 'Frontend' },
    { name: 'Node.js', color: 'from-green-500 to-green-600', category: 'Backend' },
    { name: 'PHP', color: 'from-purple-500 to-purple-600', category: 'Backend' },
    { name: 'MySQL', color: 'from-blue-600 to-blue-700', category: 'Database' },
    { name: 'Git', color: 'from-orange-600 to-red-600', category: 'Version Control' },
    { name: 'GitHub', color: 'from-gray-700 to-gray-800', category: 'Version Control' }
  ];

  useEffect(() => {
    const threshold = 400; // Adjust this value to control when logos appear
    const newVisibleLogos = technologies.map((_, index) => {
      return scrollY > threshold + (index * 100);
    });
    setVisibleLogos(newVisibleLogos);
  }, [scrollY]);

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Tecnologías y Herramientas
        </h3>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`group relative transform transition-all duration-700 ${
                visibleLogos[index] 
                  ? 'opacity-100 translate-y-0 scale-100' 
                  : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`p-6 rounded-xl bg-gradient-to-br ${tech.color} shadow-lg group-hover:shadow-xl group-hover:scale-105 transform transition-all duration-300`}>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    {tech.name.charAt(0)}
                  </div>
                  <h4 className="text-white font-semibold text-lg mb-1">
                    {tech.name}
                  </h4>
                  <p className="text-white/80 text-sm">
                    {tech.category}
                  </p>
                </div>
              </div>
              
              {/* Hover glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${tech.color} rounded-xl blur opacity-0 group-hover:opacity-25 transition-opacity duration-300`} />
            </div>
          ))}
        </div>

        {/* Additional info */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg">
            Y siempre aprendiendo nuevas tecnologías...
          </p>
        </div>
      </div>
    </section>
  );
};
