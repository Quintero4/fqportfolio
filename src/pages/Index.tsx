
import React, { useEffect, useState } from 'react';
import { FloatingContactButton } from '../components/FloatingContactButton';
import { CVButton } from '../components/CVButton';
import { SkillsButton } from '../components/SkillsButton';
import { TechLogos } from '../components/TechLogos';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Fernando Quintero
          </h1>
          <div className="flex gap-4">
            <SkillsButton />
            <CVButton />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            {/* Placeholder for personal photo */}
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6 shadow-2xl">
              <div className="w-44 h-44 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-medium">
                Tu Foto Aquí
              </div>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Desarrollador Full Stack
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Creando experiencias digitales modernas con tecnologías de vanguardia
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium">
              Frontend & Backend Developer
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-white font-medium">
              Disponible para proyectos
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Sobre Mí
          </h3>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Soy un desarrollador apasionado por crear soluciones tecnológicas innovadoras. 
              Con experiencia en desarrollo frontend y backend, me especializo en construir 
              aplicaciones web modernas, escalables y centradas en la experiencia del usuario.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi enfoque se basa en el aprendizaje continuo, la resolución creativa de problemas 
              y la colaboración efectiva en equipos de desarrollo.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <TechLogos scrollY={scrollY} />

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-8">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Estoy disponible para colaborar en proyectos interesantes
          </p>
          <div className="text-gray-400">
            Usa el botón flotante para contactarme directamente
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Fernando Quintero. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Index;
