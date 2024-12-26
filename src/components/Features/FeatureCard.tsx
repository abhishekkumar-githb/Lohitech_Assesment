import React from 'react';
import * as Icons from 'lucide-react';

interface FeatureCardProps {
  icon: keyof typeof Icons;
  title: string;
  description?: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  const Icon = Icons[icon];
  
  return (
    <div className="flex items-center gap-4 bg-white rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {description && <p className="text-gray-600 text-sm mt-1">{description}</p>}
      </div>
    </div>
  );
};

export default FeatureCard;