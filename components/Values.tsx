import React, { useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { SecurityIcon, SpeedIcon, SupportIcon } from './Icons';

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title }) => {
    const cardRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const card = cardRef.current;
      if (!card) return;
  
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      const rotateX = (y / rect.height - 0.5) * -25;
      const rotateY = (x / rect.width - 0.5) * 25;
  
      card.style.setProperty('--glow-x', `${x}px`);
      card.style.setProperty('--glow-y', `${y}px`);
      card.style.setProperty('--glow-intensity', '1');
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    };
  
    const handleMouseLeave = () => {
      const card = cardRef.current;
      if (!card) return;
      card.style.setProperty('--glow-intensity', '0');
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

  return (
    <div 
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="interactive-card text-center p-6 rounded-lg transition-transform duration-300 ease-out"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="inline-block p-5 bg-gray-200 dark:bg-gray-700 rounded-full mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      </div>
    </div>
  );
};

const Values: React.FC = () => {
  return (
    <section id="valores" className="py-20 md:py-28 bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">¿Por qué Elegir JEDD AI?</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-300 dark:divide-gray-700">
            <ValueCard 
              icon={<SecurityIcon className="w-10 h-10 text-blue-500" />} 
              title="Seguridad y Confianza" 
            />
            <ValueCard 
              icon={<SpeedIcon className="w-10 h-10 text-blue-500" />} 
              title="Innovación y Velocidad" 
            />
            <ValueCard 
              icon={<SupportIcon className="w-10 h-10 text-blue-500" />} 
              title="Soporte Humano 24/7" 
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Values;