import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 z-10"></div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-auto min-w-full min-h-full max-w-none -translate-x-1/2 -translate-y-1/2 z-0 object-cover"
      >
        <source src="https://videos.pexels.com/video-files/3209828/3209828-hd_1920_1080_25fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-20 px-4 max-w-4xl w-full mx-auto flex flex-col items-center">
        {/* 
          ESPACIO PARA ANIMACIÓN DEL LOGO 
          Reemplaza el contenido de este div con tu componente de animación.
          Se ha dejado un espacio con altura y anchura adaptable.
          Puedes ajustar 'min-h-[30vh]' y 'max-w-2xl' según sea necesario para tu animación.
        */}
        <div 
          id="logo-animation-placeholder" 
          className="w-full max-w-2xl min-h-[40vh] mb-12"
        >
          <img 
            src="https://drive.google.com/uc?id=1LcQq-sLL7uazbIYSZxC2vSjQ940RwT3f" 
            alt="Logo de JEDD AI" 
          />
        </div>
        
        <a
          href="#servicios"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 duration-300 ease-in-out shadow-lg"
        >
          Descubre Nuestras Soluciones
        </a>
      </div>
    </section>
  );
};

export default Hero;
