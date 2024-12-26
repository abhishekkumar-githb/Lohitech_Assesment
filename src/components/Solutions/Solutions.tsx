import React from 'react';
import SolutionCard from './SolutionCard';
import { solutions } from '../../data/solutions';

const Solutions = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Enterprise Solutions</h2>
          <p className="mt-4 text-xl text-gray-600">
            Transformative solutions that drive business growth and innovation
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {solutions.map((solution) => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;