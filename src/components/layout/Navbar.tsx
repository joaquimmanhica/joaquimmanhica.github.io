import React, { useState, useEffect } from 'react';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const Navbar: React.FC = () => {
  const { theme, toggleTheme, language, toggleLanguage, t, mobileMenuOpen, setMobileMenuOpen } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string): void => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const navItems = ['home', 'about', 'projects', 'experience', 'skills', 'education', 'contact'] as const;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? theme === 'dark' 
          ? 'bg-gray-900/95 backdrop-blur-lg shadow-xl border-b border-gray-800' 
          : 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            Joaquim Manhiça
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`px-4 py-2 rounded-lg ${theme === 'dark' ? 'text-gray-300 hover:text-white hover:bg-gray-800' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'} transition-all font-medium`}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
            
            <div className="flex items-center ml-4 space-x-2">
              <button 
                onClick={toggleLanguage} 
                className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800 text-gray-300' : 'hover:bg-gray-100 text-gray-700'} transition-all`}
                title={language === 'pt' ? 'Switch to English' : 'Mudar para Português'}
              >
                <Globe className="w-5 h-5" />
              </button>
              
              <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800 text-yellow-400' : 'hover:bg-gray-100 text-gray-700'} transition-all`}
                title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button 
              onClick={toggleLanguage} 
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              <Globe className="w-5 h-5" />
            </button>
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`lg:hidden py-4 ${theme === 'dark' ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-lg`}>
            {navItems.map((key) => (
              <button
                key={key}
                onClick={() => scrollToSection(key)}
                className={`block w-full text-left px-4 py-3 ${theme === 'dark' ? 'text-gray-300 hover:bg-gray-800 hover:text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'} transition-all font-medium rounded-lg`}
              >
                {t.nav[key as keyof typeof t.nav]}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;