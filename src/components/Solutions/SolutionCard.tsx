import React from 'react';
import { ArrowRight } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
  image: string;
}

const SolutionCard = ({ title, description, image }: SolutionCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-xl">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0" />
      </div>
      <div className="relative p-8 h-96 flex flex-col justify-end">
        <h3 className="text-2xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-200 mb-4">{description}</p>
        <button className="flex items-center text-white group-hover:text-indigo-300 transition-colors">
          Learn More <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default SolutionCard;