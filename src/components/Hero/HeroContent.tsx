import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import Stats from './Stats';

const HeroContent = () => {
  return (
    <div className="relative z-10 max-w-3xl">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
        <span className="text-gray-900">Innovative </span>
        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Technology Solutions
        </span>
      </h1>
      <p className="mt-6 text-xl text-gray-600 leading-relaxed">
        Transform your business with cutting-edge technology solutions. We deliver innovative software and IT services that drive growth and efficiency.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Button variant="primary" size="lg">
          Get Started
        </Button>
        <Button variant="outline" size="lg">
          Our Services <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
      <Stats />
    </div>
  );
};

export default HeroContent;