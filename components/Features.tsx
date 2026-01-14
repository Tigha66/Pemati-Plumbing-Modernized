
import React from 'react';
import { Zap, ShieldCheck, Users } from 'lucide-react';

const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string }> = ({ icon, title, desc }) => (
  <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed text-sm">{desc}</p>
  </div>
);

const Features: React.FC = () => {
  return (
    <div className="container mx-auto px-4 -mt-12 relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={<Zap size={32} />}
          title="Quick Response"
          desc="Your call will always be answered on the same day guaranteed! 24 hour availability for any urgent needs."
        />
        <FeatureCard 
          icon={<ShieldCheck size={32} />}
          title="Honest Pricing"
          desc="Best pricing always offered upfront, we provide great value for our services without hidden costs."
        />
        <FeatureCard 
          icon={<Users size={32} />}
          title="Professional Staff"
          desc="Team of hardworking and respectful staff who always put the customer first in everything they do."
        />
      </div>
    </div>
  );
};

export default Features;
