import React from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* CTA Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¿Listo para el próximo proyecto?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Conectemos para llevar tu próximo proyecto al siguiente nivel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
                <Mail size={20} />
                Contáctame
              </button>
              <button className="flex items-center gap-2 border-2 border-gray-600 hover:border-white text-gray-300 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105">
                <Phone size={20} />
                Agenda una llamada
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-primary-400">Contacto</h3>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail size={18} />
                <span>consultingluismezahe@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone size={18} />
                <span>+57 300 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin size={18} />
                <span>Bogotá, Colombia</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-primary-400">Redes Sociales</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors">
                  <Linkedin size={18} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors">
                  <Github size={18} />
                  <span>GitHub Profile</span>
                </a>
                <a href="#" className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors">
                  <Mail size={18} />
                  <span>Email Directo</span>
                </a>
              </div>
            </div>

            {/* Quick Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold mb-4 text-primary-400">Información</h3>
              <div className="space-y-2 text-gray-300">
                <p>📍 Disponible para proyectos remotos</p>
                <p>🌎 Cobertura internacional</p>
                <p>⚡ Respuesta en 24 horas</p>
                <p>🚀 Enfoque en resultados</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-400">
                  © 2025 Luis Meza. Todos los derechos reservados.
                </p>
              </div>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors"
                >
                  <ArrowUp size={18} />
                  <span>Volver arriba</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;