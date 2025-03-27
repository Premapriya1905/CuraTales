import { useState } from 'react';
import Navbar from './Navbar';
import RemedyModal from './RemedyModal';
import remediesData from '../Data/remediesData'

function Remedies() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredRemedies = remediesData.filter(remedy => {
    const matchesSearch = remedy.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         remedy.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || remedy.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-hidden">
      <Navbar />
      <section className="remedies py-20">
        <div className="container mx-auto px-4">
          {/* Search Input */}
          <div className="flex justify-center mb-10">
            <input 
              className="w-full max-w-md h-12 px-4 rounded-xl text-white bg-neutral-800 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]"
              type="search" 
              placeholder="🔍 Search by category/remedy"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Category Tabs */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              {['all', 'cold', 'fever', 'digestive', 'skin', 'pain'].map(category => (
                <button 
                  key={category}
                  className={`px-5 py-2 rounded-full ${
                    activeCategory === category 
                      ? 'bg-[#5E8B7E] text-white' 
                      : 'bg-neutral-800 text-white hover:bg-[#5E8B7E]'
                  } transition duration-300 font-['Poppins,_sans-serif']`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category === 'all' ? 'All Remedies' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Remedy Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRemedies.map((remedy) => (
              <div 
                key={remedy.id}
                className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="inline-block bg-[#5E8B7E] bg-opacity-20 text-[#A7C4BC] text-xs px-3 py-1 rounded-full mb-2 font-['Poppins,_sans-serif']">
                        {remedy.category}
                      </span>
                      <h3 className="text-xl font-semibold font-['Merriweather,_serif']">{remedy.title}</h3>
                    </div>
                    <div className="bg-[#E2703A] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
                      {remedy.rating}
                    </div>
                  </div>
                  
                  <p className="text-neutral-300 mb-4 font-['Poppins,_sans-serif']">
                    {remedy.shortDescription}
                  </p>
                  
                  <div className="mb-5">
                    <h4 className="text-sm uppercase tracking-wider text-neutral-400 mb-2 font-['Poppins,_sans-serif']">Ingredients</h4>
                    <div className="flex flex-wrap gap-2">
                      {remedy.ingredients.map((ingredient, index) => (
                        <span key={index} className="bg-neutral-700 text-xs px-2 py-1 rounded font-['Poppins,_sans-serif']">
                          {ingredient}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedRemedy(remedy)}
                    className="remedy-detail-btn text-[#E2703A] hover:text-white hover:bg-[#E2703A] border border-[#E2703A] py-2 px-4 rounded-lg transition duration-300 w-full font-['Poppins,_sans-serif']"
                  >
                    Instructions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructions Modal */}
      <RemedyModal
        remedy={selectedRemedy}
        onClose={() => setSelectedRemedy(null)}
      />
    </div>
  );
}

export default Remedies;
