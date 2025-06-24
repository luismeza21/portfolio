import React from 'react';
import { CreditCard, AlertTriangle, Search, TrendingUp, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Portal empresarial - Holding financiera",
      description: "Portal completo de una holding regional que integra las bolsas de valores de Santiago, Lima y Colombia, con el objetivo de crear un mercado único y más competitivo para la inversión en la región",
      technologies: ["Next.js", "GraphQL", "Postgres", "Go", "Kubernetes"],
      features: ["Informacion de mercados", "Entrega de información en línea", "Información relevantes entre paises"],
      gradient: "from-purple-500 to-purple-600"
    },
    
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Plataforma Digital de Inversión",
      description: "Plataforma completa para operadores financieros con herramientas de análisis, trading y gestión de portafolios de inversionistas.",
      technologies: ["Next.js", "GraphQL", "Java", "Node.js", "Postgres", "AWS", "Docker"],
      features: ["Mercados bursatiles en tiempo real", "Entrega de información en línea", "Gestión de portafolios"],
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Portal de Consulta Crediticia",
      description: "Sistema integral para consultas crediticias de consumidores con integración a múltiples centrales de riesgo y análisis predictivo.",
      technologies: ["Java", "MongoDB", "Angular", "AWS", "Kubernetes"],
      features: ["Consultas masivas", "Análisis predictivo", "Integración múltiple"],
      gradient: "from-green-500 to-green-600"
    },
    
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Plataforma PSE - Entidades financieras",
      description: "Sistema de pagos electrónicos para entidades bancarias con alta disponibilidad y máxima seguridad. Procesamiento de transacciones en tiempo real con arquitectura distribuida.",
      technologies: ["Java", "Spring Boot", "PostgreSQL", "AWS", "Docker"],
      features: ["Alta disponibilidad 99.9%", "Seguridad bancaria", "Procesamiento en tiempo real"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "Sistema de Alertas Transaccionales",
      description: "Plataforma de monitoreo y alertas para transacciones financieras con detección de anomalías y notificaciones automáticas en tiempo real.",
      technologies: ["Java", "Angular", "Postgres", "Redis", "On-premise", "Microservicios", "Kubernetes"],
      features: ["Monitoreo 24/7", "Detección de anomalías", "Alertas automáticas"],
      gradient: "from-red-500 to-red-600"
    }
    
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Proyectos Destacados
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Soluciones tecnológicas que he desarrollado para el sector financiero y empresarial
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${project.gradient} p-6`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 text-white">
                        {project.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                    <ExternalLink className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Características clave:</h4>
                    <div className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Tecnologías:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary-100 hover:text-primary-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;