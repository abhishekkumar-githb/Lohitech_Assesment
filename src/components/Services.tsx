import React from 'react';
import { Code, Palette, Globe, TrendingUp } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8 text-indigo-600" />,
      title: 'Web Development',
      description: 'Custom websites built with modern technologies for optimal performance.',
    },
    {
      icon: <Palette className="h-8 w-8 text-indigo-600" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.',
    },
    {
      icon: <Globe className="h-8 w-8 text-indigo-600" />,
      title: 'Digital Marketing',
      description: 'Strategic marketing solutions to grow your online presence.',
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-indigo-600" />,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            Comprehensive solutions for your digital needs
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;