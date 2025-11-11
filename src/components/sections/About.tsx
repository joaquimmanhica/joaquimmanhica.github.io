import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const About: React.FC = () => {
  const { theme, t } = useApp();

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.about.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:border-purple-500 transition-all`}>
            <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              {t.about.summary}
            </p>
          </div>

          <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Star className="w-6 h-6 text-yellow-500" />
              {t.about.highlights.title}
            </h3>
            <ul className="space-y-3">
              {t.about.highlights.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <ChevronRight className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;