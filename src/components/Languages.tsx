import React from 'react';
import { Globe, Users, Zap, Target, Cloud, Cog } from 'lucide-react';

const Languages = () => {
  const languages = [
    { name: "Español", level: "Nativo", percentage: 100 },
    { name: "Inglés", level: "Intermedio", percentage: 75 },
    { name: "Francés", level: "Básico", percentage: 40 }
  ];

  const softSkills = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Trabajo en Equipo",
      description: "Colaboración efectiva en equipos multidisciplinarios",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud Computing",
      description: "Arquitecturas y soluciones en la nube",
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Scrum",
      description: "Metodologías ágiles y gestión de proyectos",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fullstack",
      description: "Desarrollo integral frontend y backend",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "DevOps",
      description: "Integración y despliegue continuo",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Microservicios",
      description: "Arquitecturas distribuidas y escalables",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Idiomas & Habilidades
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Competencias lingüísticas y habilidades blandas que complementan mi perfil técnico
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Languages Section */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white mr-4">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Idiomas</h3>
              </div>

              <div className="space-y-6">
                {languages.map((language, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="flex justify-between items-center mb-3">
                      <h4 className="font-semibold text-gray-900">{language.name}</h4>
                      <span className="text-sm text-primary-600 font-medium">{language.level}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${language.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills Section */}
            <div>
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white mr-4">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Habilidades Clave</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div 
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${skill.color} rounded-lg text-white mb-4`}>
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{skill.title}</h4>
                    <p className="text-gray-600 text-sm">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Languages;