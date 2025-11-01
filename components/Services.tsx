import React, { useRef } from 'react';
import AnimatedSection from './AnimatedSection';
import { WebAppIcon, AIIcon, AutomationIcon, ECommerceIcon, DataIcon, SupportIcon } from './Icons';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
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
      className="interactive-card bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center transition-transform duration-300 ease-out shadow-lg border border-gray-200 dark:border-gray-700"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <div className="inline-block p-4 bg-blue-100 dark:bg-blue-900/50 rounded-full mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};


const Services: React.FC = () => {
  const services = [
    {
      icon: <WebAppIcon className="w-8 h-8 text-blue-500" />,
      title: 'Aplicaciones web y móviles',
      description: 'Creación de aplicaciones a medida con arquitecturas modernas (React, Vue, Native) para plataformas Android, iOS y Web.',
    },
    {
      icon: <AIIcon className="w-8 h-8 text-blue-500" />,
      title: 'Consultoría en IA',
      description: 'Implementación de modelos de Machine Learning y sistemas de IA generativa para optimizar procesos y toma de decisiones.',
    },
    {
      icon: <AutomationIcon className="w-8 h-8 text-blue-500" />,
      title: 'Automatización de Procesos (RPA)',
      description: 'Optimización de flujos de trabajo repetitivos y aumento de la eficiencia operativa de tu equipo, minimizando el error manual.',
    },
    {
      icon: <ECommerceIcon className="w-8 h-8 text-blue-500" />,
      title: 'E-commerce de Alto Rendimiento',
      description: 'Desarrollo de tiendas en línea escalables y seguras, enfocadas en la experiencia del usuario y la conversión de ventas.',
    },
    {
      icon: <DataIcon className="w-8 h-8 text-blue-500" />,
      title: 'Análisis de Datos e Insights',
      description: 'Transformamos grandes volúmenes de datos en información valiosa y visualizaciones interactivas para decisiones estratégicas.',
    },
    {
      icon: <SupportIcon className="w-8 h-8 text-blue-500" />,
      title: 'Mantenimiento y Soporte 24/7',
      description: 'Soporte técnico y mantenimiento preventivo continuo para asegurar el rendimiento óptimo y la seguridad de tus sistemas.',
    },
  ];

  return (
    <section id="servicios" className="py-20 md:py-28 bg-white/30 dark:bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Servicios de Vanguardia</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;