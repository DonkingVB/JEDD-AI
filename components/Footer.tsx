import React from 'react';
import { InstagramIcon, TikTokIcon, TwitterIcon } from './Icons';

interface FooterProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const FooterLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-gray-400 hover:text-white transition-colors duration-300">{children}</a>
);

const ThemeToggle: React.FC<FooterProps> = ({ isDarkMode, toggleTheme }) => (
  <button
    onClick={toggleTheme}
    aria-label={isDarkMode ? 'Activar modo claro' : 'Activar modo oscuro'}
    className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-800"
    style={{ backgroundColor: isDarkMode ? '#4A5568' : '#A0AEC0' }}
  >
    <span className="sr-only">Cambiar tema</span>
    <span
      className={`${
        isDarkMode ? 'translate-x-6' : 'translate-x-1'
      } inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-300`}
    />
  </button>
);

const Footer: React.FC<FooterProps> = ({ isDarkMode, toggleTheme }) => {
  return (
    <footer className="bg-gray-800/80 dark:bg-black/80 backdrop-blur-sm text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-white mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#home">Inicio</FooterLink></li>
              <li><FooterLink href="#nosotros">Nosotros</FooterLink></li>
              <li><FooterLink href="#servicios">Servicios</FooterLink></li>
              <li><FooterLink href="#proyectos">Proyectos</FooterLink></li>
              <li><FooterLink href="#valores">Valores</FooterLink></li>
              <li><FooterLink href="#contacto">Contacto</FooterLink></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm">
              <li><span className="font-semibold">Email:</span> jedd.ai.software@gmail.com</li>
              <li><span className="font-semibold">Horario:</span> 7:00 - 14:00</li>
              <li className="text-gray-400">Mar Mediterráneo 227, Nextitla, Miguel Hidalgo, 11420 Ciudad de México, CDMX</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><FooterLink href="#">Aviso de privacidad</FooterLink></li>
              <li><FooterLink href="#">Términos y Condiciones de Uso</FooterLink></li>
              <li><FooterLink href="#">Políticas de la Empresa</FooterLink></li>
            </ul>
          </div>
           <div>
            <h4 className="font-bold text-white mb-4">Redes Sociales</h4>
            <div className="flex space-x-4">
                <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <InstagramIcon className="w-6 h-6" />
                </a>
                <a href="#" aria-label="TikTok" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <TikTokIcon className="w-6 h-6" />
                </a>
                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors duration-300">
                    <TwitterIcon className="w-6 h-6" />
                </a>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Tema</h4>
            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 mt-8 text-center text-sm text-gray-500">
          <p>&copy; 2025 JEDD AI, S.A. de C.V.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;