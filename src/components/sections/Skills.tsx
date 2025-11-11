import React from 'react';
import { Smartphone, Server, Code, Database } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { getSkillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  const { theme, t } = useApp();
  const skillCategories = getSkillCategories(t);

  const icons: Record<number, React.ReactNode> = {
    0: <Smartphone className="w-6 h-6" />,
    1: <Server className="w-6 h-6" />,
    2: <Code className="w-6 h-6" />,
    3: <Database className="w-6 h-6" />
  };

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.skills.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:border-purple-500 transition-all`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 bg-gradient-to-r ${category.color} rounded-xl text-white`}>
                  {icons[idx]}
                </div>
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                        {skill.name}
                      </span>
                      <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-200'}`}>
                      <div 
                        className={`h-full bg-gradient-to-r ${category.color} transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;