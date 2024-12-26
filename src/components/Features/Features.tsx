import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  { icon: 'BarChart2', title: 'Marketing Support' },
  { icon: 'Search', title: 'Search Engine Optimization' },
  { icon: 'Headphones', title: 'Training & Support' },
  { icon: 'Clock', title: 'Lifetime Support' },
  { icon: 'DollarSign', title: 'Affordable Price' },
  { icon: 'Building2', title: 'Business Solution' },
  { icon: 'Palette', title: 'Design & Branding' },
  { icon: 'Users', title: 'Experienced Team' },
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-600 font-medium mb-4">
            Explore
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Design & Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We can work with your existing web provider or build you your own new digital presence
            while using the latest innovations and strategies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;