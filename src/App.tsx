import React, { useState } from 'react';
import { Users, Sparkles } from 'lucide-react';
import SearchForm from './components/SearchForm';
import LeadCard from './components/LeadCard';

const MOCK_LEADS = [
  {
    id: 1,
    name: 'Sophie Martin',
    title: 'Directrice Marketing Digital',
    company: 'Tech Solutions',
    location: 'Paris, France',
    imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 2,
    name: 'Thomas Dubois',
    title: 'Business Development Manager',
    company: 'Innovation Corp',
    location: 'Lyon, France',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
  {
    id: 3,
    name: 'Marie Laurent',
    title: 'Chef de Projet Digital',
    company: 'Digital Agency',
    location: 'Bordeaux, France',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
  },
];

function App() {
  const [leads] = useState(MOCK_LEADS);

  const handleSearch = (filters: any) => {
    console.log('Recherche avec les filtres:', filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="h-8 w-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">LeadFinder</h1>
            </div>
            <nav className="flex items-center gap-4">
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Tableau de bord</button>
              <button className="px-4 py-2 text-gray-700 hover:text-gray-900">Historique</button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Mon compte
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trouvez vos prospects B2B idéaux sur LinkedIn
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Identifiez et connectez-vous avec les décideurs qui correspondent parfaitement à votre cible commerciale.
          </p>
        </div>

        {/* Search Section */}
        <div className="flex justify-center mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Users size={24} className="text-gray-600" />
              <h3 className="text-xl font-semibold text-gray-900">
                Résultats ({leads.length})
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <select className="px-3 py-2 border border-gray-300 rounded-lg bg-white">
                <option>Trier par pertinence</option>
                <option>Trier par date</option>
                <option>Trier par nom</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leads.map((lead) => (
              <LeadCard key={lead.id} {...lead} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;