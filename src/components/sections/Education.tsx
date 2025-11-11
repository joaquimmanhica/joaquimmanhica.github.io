import React from 'react';
import { GraduationCap, Globe, Star } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Education: React.FC = () => {
  const { theme, t } = useApp();

  return (
    <section id="education" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.education.title}
          </h2>
          <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.education.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Degree Card */}
          <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl text-white">
                <GraduationCap className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">{t.education.degree}</h3>
                <p className="text-lg text-purple-500 font-medium mb-1">{t.education.minor}</p>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t.education.university}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className={`px-4 py-2 rounded-full text-sm font-medium ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-white text-gray-700'}`}>
                {t.education.period}
              </span>
              <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {t.education.location}
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="w-8 h-8 text-blue-500" />
              <h3 className="text-2xl font-bold">{t.languages.title}</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
                <div>
                  <p className="font-bold text-lg">{t.languages.portuguese}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.languages.native}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10">
                <div>
                  <p className="font-bold text-lg">{t.languages.english}</p>
                  <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t.languages.fluent}
                  </p>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;