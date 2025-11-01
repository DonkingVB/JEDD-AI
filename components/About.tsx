import React, { useRef } from 'react';
import AnimatedSection from './AnimatedSection';

const PhilosophyCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
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
      className="interactive-card bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-xl transition-transform duration-300 ease-out border border-gray-200 dark:border-gray-700"
    >
      <div style={{ transform: 'translateZ(20px)' }}>
        <h3 className="text-2xl font-bold text-blue-500 dark:text-blue-400 mb-3">{title}</h3>
        <p className="text-base">{children}</p>
      </div>
    </div>
  );
};

const About: React.FC = () => {
  return (
    <section id="nosotros" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Nuestra Filosofía</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection>
            <PhilosophyCard title="Misión">
              Desarrollar soluciones innovadoras, seguras y de alta calidad que superen las expectativas de nuestros clientes y definan nuevos estándares en la industria tecnológica.
            </PhilosophyCard>
          </AnimatedSection>
          <AnimatedSection>
            <PhilosophyCard title="Visión">
              Ser reconocidos globalmente por la innovación y la excelencia técnica, siendo el socio tecnológico preferido para empresas que buscan una transformación digital integral.
            </PhilosophyCard>
          </AnimatedSection>
          <AnimatedSection>
            <PhilosophyCard title="Objetivo">
              Impulsar el crecimiento y la eficiencia de empresas mediante software de vanguardia, automatización avanzada e implementación estratégica de inteligencia artificial.
            </PhilosophyCard>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default About;