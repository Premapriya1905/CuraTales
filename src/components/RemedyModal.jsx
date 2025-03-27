// components/RemedyModal.jsx
import { useEffect } from 'react';

export default function RemedyModal({ remedy, onClose }) {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (!remedy) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white text-neutral-800 rounded-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="p-6 overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="inline-block bg-[#5E8B7E] bg-opacity-20 text-white text-sm px-3 py-1 rounded-full mb-2 font-['Poppins,_sans-serif']">
                {remedy.category}
              </span>
              <h3 className="text-2xl font-semibold font-['Merriweather,_serif']">{remedy.title}</h3>
            </div>
            <button 
              onClick={onClose}
              className="text-neutral-500 hover:text-neutral-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-2 font-['Merriweather,_serif']">Instructions</h4>
              <ol className="list-decimal pl-5 space-y-2 text-neutral-600 font-['Poppins,_sans-serif']">
                {remedy.instructions.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}