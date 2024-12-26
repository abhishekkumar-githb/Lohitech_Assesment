import React from 'react';
import * as Icons from 'lucide-react';
import { Button } from '../ui/Button';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  features: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  const Icon = Icons[icon];

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
        <Icon className="h-8 w-8 text-indigo-600" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <Icons.Check className="h-5 w-5 text-green-500 mr-3" />
            {feature}
          </li>
        ))}
      </ul>
      <Button variant="outline" className="w-full">
        Learn More
      </Button>
    </div>
  );
};

export default ServiceCard;