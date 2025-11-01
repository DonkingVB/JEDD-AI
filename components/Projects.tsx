import React, { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = (y / rect.height - 0.5) * -20;
    const rotateY = (x / rect.width - 0.5) * 20;

    card.style.setProperty('--glow-x', `${x}px`);
    card.style.setProperty('--glow-y', `${y}px`);
    card.style.setProperty('--glow-intensity', '1');
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--glow-intensity', '0');
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };
  
  return (
    <div 
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="interactive-card relative overflow-hidden rounded-lg shadow-lg group aspect-w-16 aspect-h-9 transition-transform duration-300 ease-out"
    >
      <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110" />
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-500 flex flex-col justify-end p-6">
        <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out" style={{ transform: 'translateZ(50px)' }}>
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{description}</p>
        </div>
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Gemma Inventory (SaaS)',
      description: 'App de venta de productos y gestión de eventos para médicos cirujanos.',
      imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Dashboard de Proyectos',
      description: 'Plataforma de gestión para agilizar las tareas asignadas y el seguimiento del progreso.',
      imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'E-commerce Deportivo',
      description: 'Solución de venta de artículos deportivos para vendedores minoristas con alta personalización.',
      imageUrl: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop',
    },
    {
      title: 'Agendador Inteligente',
      description: 'Aplicación para agilizar la gestión de citas médicas y listas de espera, optimizando el tiempo.',
      imageUrl: 'https://images.unsplash.com/photo-1521931961828-fe48117c75da?q=80&w=2070&auto=format&fit=crop',
    },
  ];

  return (
    <section id="proyectos" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Nuestros Proyectos Estelares</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>
        
        <AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;