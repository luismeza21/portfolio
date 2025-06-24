import React from 'react';
import { Code, Database, Cloud, Settings, Layers, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Lenguajes",
      skills: ["Java", "JavaScript", "Go"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Frameworks",
      skills: ["Spring", "Node.js", "Express.js", "NestJS", "React", "Angular"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de Datos",
      skills: ["SQL", "NoSQL", "MongoDB", "PostgreSQL", "MySQL"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Herramientas",
      skills: ["Git", "Docker", "npm", "Maven", "Jenkins"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud",
      skills: ["AWS", "Azure", "GCP", "Kubernetes", "Terraform"],
      color: "from-cyan-500 to-cyan-600"
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Arquitectura",
      skills: ["Microservicios", "On-Premise", "Cloud Native", "APIs REST"],
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
              Habilidades Técnicas
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones robustas y escalables
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className={`flex items-center justify-center w-14 h-14 bg-gradient-to-br ${category.color} rounded-xl text-white mb-6`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between bg-white rounded-lg px-4 py-2 shadow-sm"
                    >
                      <span className="text-gray-700 font-medium">{skill}</span>
                      <div className="flex space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <div 
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < 4 ? 'bg-primary-500' : 'bg-gray-200'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;