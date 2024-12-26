import React from 'react';

const stats = [
  { id: 1, value: '500+', label: 'Clients Worldwide' },
  { id: 2, value: '98%', label: 'Client Satisfaction' },
  { id: 3, value: '15+', label: 'Years Experience' },
  { id: 4, value: '24/7', label: 'Support' },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
      {stats.map((stat) => (
        <div key={stat.id} className="text-center">
          <div className="text-4xl font-bold text-indigo-600">{stat.value}</div>
          <div className="mt-2 text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default Stats;