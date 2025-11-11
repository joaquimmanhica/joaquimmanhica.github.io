import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Contact: React.FC = () => {
  const { theme, t } = useApp();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            {t.contact.subtitle}
          </p>
          <p className={`text-base max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            {t.contact.description}
          </p>
        </div>

        <div className={`rounded-2xl p-8 ${theme === 'dark' ? 'bg-gradient-to-br from-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 to-purple-50'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'} mb-8`}>
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:joaquimmanhica6@gmail.com" 
              className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-all hover:scale-105`}
            >
              <Mail className="w-10 h-10 mx-auto mb-4 text-blue-500" />
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`}>
                Email
              </p>
              <p className="font-medium text-center text-sm break-all">
                joaquimmanhica6@gmail.com
              </p>
            </a>
            <a 
              href="tel:+258879567660" 
              className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50 hover:bg-gray-800' : 'bg-white hover:bg-gray-50'} transition-all hover:scale-105`}
            >
              <Phone className="w-10 h-10 mx-auto mb-4 text-purple-500" />
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`}>
                Phone
              </p>
              <p className="font-medium text-center">+258 879 567 660</p>
            </a>
            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-white'}`}>
              <MapPin className="w-10 h-10 mx-auto mb-4 text-pink-500" />
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2 text-center`}>
                Location
              </p>
              <p className="font-medium text-center text-sm">{t.contact.location}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className={`inline-flex items-center gap-2 px-6 py-3 rounded-full ${theme === 'dark' ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-700'} mb-8`}>
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            {t.contact.availability}
          </div>
          
          <div className="flex justify-center gap-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110`}
            >
              <Github className="w-7 h-7" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110`}
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a 
              href="mailto:joaquimmanhica6@gmail.com" 
              className={`p-4 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition-all hover:scale-110`}
            >
              <Mail className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;