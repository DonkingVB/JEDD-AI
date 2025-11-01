import React, { useState, useEffect } from 'react';

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-white hover:text-blue-400 transition-colors duration-300 px-3 py-2 text-sm font-medium">
    {children}
  </a>
);

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          JEDD <span className="text-blue-400">AI</span>
        </a>
        <div className="hidden md:flex items-center space-x-1">
          <NavLink href="#home">Inicio</NavLink>
          <NavLink href="#nosotros">Nosotros</NavLink>
          <NavLink href="#servicios">Servicios</NavLink>
          <NavLink href="#proyectos">Proyectos</NavLink>
          <NavLink href="#valores">Valores</NavLink>
          <NavLink href="#contacto">Contacto</NavLink>
        </div>
        {/* A mobile menu button could be added here for smaller screens */}
        <div className="md:hidden">
            <button className="text-white focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;