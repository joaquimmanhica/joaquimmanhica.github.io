import React from 'react';
import { Smartphone, Star, ChevronRight, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getProjects } from '../../data/projects';

const Projects: React.FC = () => {
  const { theme, t, language } = useApp();
  const projects = getProjects(language);

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.projects.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.projects.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-6 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 hover:shadow-2xl transition-all duration-300`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${project.color} text-white`}>
                  <Smartphone className="w-6 h-6" />
                </div>
                <div className="flex gap-2">
                  {project.downloads && (
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-medium">
                      {project.downloads}
                    </span>
                  )}
                  {project.rating && (
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-xs font-medium flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                      {project.rating}
                    </span>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {project.description}
              </p>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.projects.technologies}:
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i} 
                      className={`px-3 py-1 rounded-full text-xs ${theme === 'dark' ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-700'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <p className={`text-xs font-semibold mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.projects.features}:
                </p>
                <ul className="space-y-1">
                  {project.features.map((feature, i) => (
                    <li 
                      key={i} 
                      className={`text-xs flex items-center gap-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}
                    >
                      <ChevronRight className="w-3 h-3 text-purple-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all text-sm"
              >
                {t.projects.viewApp}
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;