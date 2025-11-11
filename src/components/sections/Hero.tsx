import React from 'react';
import { Download, ChevronRight, Github, Linkedin, Mail } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import type { Stat } from '../../types';

const Hero: React.FC = () => {
  const { theme, t } = useApp();

  const stats: Stat[] = [
    { value: "6000+", label: t.hero.stats.downloads },
    { value: "5+", label: t.hero.stats.apps },
    { value: "3+", label: t.hero.stats.experience }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <p className={`text-lg mb-3 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} animate-fadeIn`}>
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-fadeIn">
            Joaquim Manhiça
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent animate-fadeIn">
            {t.hero.role}
          </h2>
          <p className={`text-base md:text-lg lg:text-xl max-w-3xl mx-auto mb-10 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} animate-fadeIn`}>
            {t.hero.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto mb-10">
          {stats.map((stat, idx) => (
            <div key={idx} className={`p-4 md:p-6 rounded-2xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white/80'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} hover:scale-105 transition-all`}>
              <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-medium hover:shadow-2xl hover:scale-105 transition-all flex items-center gap-2 group">
            <Download className="w-5 h-5 group-hover:animate-bounce" />
            {t.hero.downloadCV}
          </button>
          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className={`px-8 py-4 rounded-xl font-medium border-2 ${
              theme === 'dark' 
                ? 'border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white' 
                : 'border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
            } transition-all flex items-center gap-2 group`}
          >
            {t.hero.viewProjects}
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
          >
            <Github className="w-6 h-6" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a 
            href="mailto:joaquimmanhica6@gmail.com" 
            className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110 hover:-translate-y-1`}
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;