import React from 'react';
import { Briefcase, MapPin, LinkedinIcon, Mail } from 'lucide-react';

interface LeadProps {
  name: string;
  title: string;
  company: string;
  location: string;
  imageUrl: string;
}

export default function LeadCard({ name, title, company, location, imageUrl }: LeadProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <Briefcase size={16} />
            <span>{title} chez {company}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600 mt-1">
            <MapPin size={16} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="flex gap-3 mt-6">
        <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          <LinkedinIcon size={18} />
          Voir le profil
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
          <Mail size={18} />
          Contacter
        </button>
      </div>
    </div>
  );
}