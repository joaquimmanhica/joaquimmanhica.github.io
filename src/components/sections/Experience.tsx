import React from 'react';
import { Briefcase, Code, ChevronRight, Award, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getExperiences } from '../../data/experience';

const Experience: React.FC = () => {
  const { theme, t, language } = useApp();
  const experiences = getExperiences(language);

  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.experience.subtitle}
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:border-purple-500 transition-all`}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="mb-4 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
                      <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                  </div>
                  <p className="text-lg font-medium text-blue-500 mb-1">{exp.company}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {exp.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}>
                    {exp.period}
                  </span>
                  {exp.current && (
                    <span className="px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      {t.experience.current}
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className={`font-semibold mb-3 text-lg flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    <Code className="w-5 h-5 text-purple-500" />
                    {t.experience.responsibilities}:
                  </h4>
                  <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {exp.achievements && (
                  <div className={`pt-4 border-t ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <h4 className={`font-semibold mb-3 flex items-center gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                      <Award className="w-5 h-5 text-yellow-500" />
                      {t.experience.achievements}:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                          <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;