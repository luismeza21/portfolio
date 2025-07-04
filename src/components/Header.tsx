import React from 'react';
import { Download, Linkedin, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="min-h-screen bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen text-center">
        {/* Profile Image */}
        <div className="mb-8 animate-fade-in">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-white-400 to-blue-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-white/20 overflow-hidden">
              <img 
                src="https://media.licdn.com/dms/image/v2/C5603AQGOCPYFpdwdUw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1624402238645?e=1756339200&v=beta&t=rWatwOB83vix3uNwBP9AsPCq79Phs8OsbWyvpaaWQOk"  // Reemplaza con la ruta de tu imagen
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
              </div>
        </div>

        {/* Name and Title */}
        <div className="mb-6 animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Luis Meza
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-purple-200 mb-2">
            Ingeniero de Sistemas
          </h2>
          <h3 className="text-lg md:text-xl text-purple-300">
            Software Development Specialist & Cloud Engineer
          </h3>
        </div>

        {/* Highlight Phrase */}
        <p className="text-lg md:text-xl text-purple-100 max-w-4xl mx-auto mb-10 leading-relaxed animate-slide-up delay-200">
          <span className="font-semibold text-white">+8 años</span> creando soluciones digitales{' '}
          <span className="font-semibold text-white">robustas, seguras y escalables</span>{' '}
          para el sector financiero.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up delay-300">
          {/**
           * 
           * <button className="flex items-center gap-2 bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 shadow-lg">
            <Download size={20} />
            Descargar CV
          </button>
           */}
         <a
          href="https://www.linkedin.com/in/luis-meza-hernandez/"  // Reemplaza con tu URL
  target="_blank"
  rel="noopener noreferrer">
            <button className="flex items-center gap-2 border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary-700 transition-all duration-300 hover:scale-105">
            <Linkedin size={20} />
            Ver LinkedIn
          </button>
          </a>
          
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={32} className="text-white/70" />
        </div>
      </div>
    </header>
  );
};

export default Header;