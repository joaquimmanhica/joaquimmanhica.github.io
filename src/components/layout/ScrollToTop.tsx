import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const ScrollToTop: React.FC = () => {
  const { theme } = useApp();
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisible = (): void => {
      setVisible(window.pageYOffset > 300);
    };
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-4 rounded-full shadow-lg transition-all duration-300 z-40 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      } bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:scale-110`}
      aria-label="Scroll to top"
    >
      <ChevronRight className="w-6 h-6 transform -rotate-90" />
    </button>
  );
};

export default ScrollToTop;