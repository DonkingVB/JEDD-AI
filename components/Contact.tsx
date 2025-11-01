import React from 'react';
import AnimatedSection from './AnimatedSection';
import { MailIcon, PhoneIcon, LocationIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">Contacto</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <AnimatedSection>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Envíanos un mensaje</h3>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Nombre</label>
                  <input type="text" id="name" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" id="email" className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Mensaje</label>
                  <textarea id="message" rows={4} className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-blue-500 focus:border-blue-500 transition"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 transform hover:scale-105">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </AnimatedSection>
          <AnimatedSection>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Información de Contacto</h3>
              <div className="flex items-start space-x-4">
                <MailIcon className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Email</h4>
                  <p>jedd.ai.software@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <PhoneIcon className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Horario</h4>
                  <p>7:00 - 14:00</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <LocationIcon className="w-6 h-6 text-blue-500 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Dirección</h4>
                  <p>Mar Mediterráneo 227, Nextitla, Miguel Hidalgo, 11420 Ciudad de México, CDMX</p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;