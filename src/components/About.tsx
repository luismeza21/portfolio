import React from 'react';
import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "8+ Años de Experiencia",
      description: "Liderando proyectos de desarrollo de software"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Liderazgo de Equipos",
      description: "Dirigiendo equipos técnicos multidisciplinarios"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Orientado a Resultados",
      description: "Entregando soluciones alineadas con objetivos de negocio"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovación Constante",
      description: "Implementando tecnologías de vanguardia"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sobre Mí
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Main Description */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <span className="font-semibold text-primary-700">Ingeniero de Sistemas</span> con más de{' '}
              <span className="font-semibold text-primary-700">8 años de experiencia</span> liderando y 
              participando en todas las etapas del ciclo de vida del desarrollo de software. 
            </p>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Experto en <span className="font-semibold text-primary-700">estimación, diseño técnico, 
              documentación, implementación, pruebas, despliegue y soporte</span> de aplicaciones. 
              Capacidad comprobada para dirigir equipos y entregar soluciones de alta calidad 
              alineadas con objetivos de negocio.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg text-white mb-4">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;