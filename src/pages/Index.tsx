
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
            Fernando Quintero Gómez
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
            {/* Personal photo */}
{/* Personal photo */}
<div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 shadow-2xl">
  <img 
    src="img/Linkedin.jpg" 
    alt="Fernando Quintero" 
    className="w-full h-full object-cover"
  />
</div>

          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Desarrollador de Aplicaciones Web
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Especializado en desarrollo Frontend y Backend con experiencia en hostelería y coordinación de equipos
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white font-medium">
              HTML • CSS • JavaScript • PHP • MySQL
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
              Desarrollador web apasionado por la programación y la tecnología. Con experiencia en hostelería 
              y coordinación de equipos, comprometido con el aprendizaje continuo, la resolución de problemas 
              y la mejora constante para aportar valor en el desarrollo de aplicaciones.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Mi experiencia en atención al cliente y trabajo en equipo me ha enseñado a coordinarme con 
              compañeros y resolver problemas en el momento, habilidades clave para colaborar con diseñadores, 
              otros programadores y clientes en proyectos de desarrollo web.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h3 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
            Experiencia
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Professional Experience */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Experiencia Profesional</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">Hostelería</h5>
                    <p className="text-gray-300 text-sm mb-2">Gestión del tiempo y organización</p>
                    <p className="text-gray-400 text-sm">Trabajo en equipo y comunicación efectiva</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">Konecta - Teleoperador/Auditor/Coordinador</h5>
                    <p className="text-gray-300 text-sm mb-2">Comunicación y resolución de problemas</p>
                    <p className="text-gray-400 text-sm">Gestión de equipos y liderazgo</p>
                  </div>
                </div>
              </div>

              {/* Education */}
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
                <h4 className="text-xl font-semibold text-white mb-4">Formación</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">Universidad de Sevilla</h5>
                    <p className="text-gray-300 text-sm">Comunicación Audiovisual</p>
                    <p className="text-gray-400 text-sm">Agosto 2015 - Junio 2018</p>
                  </div>
                  <div>
                    <h5 className="text-lg font-medium text-purple-300">Centro de estudios Ilerna</h5>
                    <p className="text-gray-300 text-sm">Grado superior en Desarrollo de aplicaciones web</p>
                    <p className="text-gray-400 text-sm">Febrero 2023 - En curso</p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="text-gray-400 mb-4">
            Usa el botón flotante para contactarme directamente
          </div>
          <div className="text-gray-300">
            <p>📧 fquintero.prof@gmail.com</p>
            <p>📱 +34 652 33 73 40</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/10">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Fernando Quintero Gómez. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Floating Contact Button */}
      <FloatingContactButton />
    </div>
  );
};

export default Index;
