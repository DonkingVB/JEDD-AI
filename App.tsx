import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Values from './components/Values';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('jedd-ai-theme') === 'dark' || 
                   (!('jedd-ai-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('jedd-ai-theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('jedd-ai-theme', 'light');
      }
      return newMode;
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 transition-colors duration-500 animated-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Values />
        <Contact />
      </main>
      <Footer isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
    </div>
  );
};

export default App;