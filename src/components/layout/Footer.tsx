import React from 'react';
import { useApp } from '../../context/AppContext';

const Footer: React.FC = () => {
  const { theme, t } = useApp();

  const scrollToSection = (id: string): void => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className={`py-12 px-4 border-t ${theme === 'dark' ? 'border-gray-800 bg-gray-900/50' : 'border-gray-200 bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent mb-3">
              Joaquim Manhiça
            </h3>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {t.footer.description}
            </p>
          </div>
          
          <div>
            <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Quick Links
            </h4>
            <div className="space-y-2">
              {(['home', 'about', 'projects', 'experience', 'skills', 'education', 'contact'] as Array<keyof typeof t.nav>).map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block text-sm ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
                >
                  {t.nav[section]}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className={`font-bold mb-3 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Contact
            </h4>
            <div className="space-y-2 text-sm">
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                Maputo, Mozambique
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                joaquimmanhica6@gmail.com
              </p>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                +258 879 567 660
              </p>
            </div>
          </div>
        </div>
        
        <div className={`pt-8 border-t ${theme === 'dark' ? 'border-gray-800' : 'border-gray-200'} text-center`}>
          <p className={`mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2025 Joaquim Sebastião Manhiça. {t.footer.rights}.
          </p>
          <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;