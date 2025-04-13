import { useState } from "react";
import Navbar from "../components/navbar";
import RemedyModal from "./RemedyModal";
import remediesData from "../Data/remediesData";

function Remedies() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredRemedies = remediesData.filter((remedy) => {
    const matchesSearch =
      remedy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      remedy.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      activeCategory === "all" ||
      remedy.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  const categories = [
    "all",
    "cold",
    "fever",
    "stomach problems",
    "skin care",
    "Hair care",
    "pain relief",
    "immunity boosting",
    "urinary",
    "Women's health",
    "other's",
  ];

  return (
    <div className="min-h-screen bg-neutral-900 text-white overflow-x-hidden">
      <Navbar />
      <section className="remedies py-20">
        <div className="container mx-auto px-4">
          {/* Search Input and Dropdown */}
          <div className="flex flex-col items-center mb-6 sm:mb-10 px-4 gap-4">
            {/* Search Input */}
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="🔍 Search for a remedy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                🔍
              </div>
            </div>

            {/* Dropdown Menu */}
            <div className="relative w-full max-w-md">
              <button
                type="button"
                className="inline-flex justify-between w-full rounded-xl px-4 py-3 bg-neutral-800 border border-neutral-700 text-sm sm:text-base text-white focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                {activeCategory === "all"
                  ? "🔍 Search by category/remedy"
                  : activeCategory.charAt(0).toUpperCase() +
                    activeCategory.slice(1)}
                <svg
                  className={`-mr-1 ml-2 h-5 w-5 transition-transform duration-200 ${
                    isDropdownOpen ? "transform rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isDropdownOpen && (
                <div className="origin-top-right absolute right-0 left-0 z-10 mt-2 rounded-xl shadow-lg bg-neutral-800 border border-neutral-700 focus:outline-none">
                  <div className="py-1 max-h-60 overflow-y-auto">
                    {categories.map((category) => (
                      <button
                        key={category}
                        className={`block w-full text-left px-4 py-2 text-sm sm:text-base text-white ${
                          activeCategory === category
                            ? "bg-[#5E8B7E]"
                            : "hover:bg-neutral-700"
                        }`}
                        onClick={() => {
                          setActiveCategory(category);
                          setIsDropdownOpen(false);
                        }}
                      >
                        {category === "all"
                          ? "All Remedies"
                          : category.charAt(0).toUpperCase() +
                            category.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
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
                      <h3 className="text-xl font-semibold font-['Merriweather,_serif']">
                        {remedy.title}
                      </h3>
                    </div>
                    <div className="bg-[#E2703A] text-white text-xs font-bold rounded-full h-8 w-8 flex items-center justify-center">
                      {remedy.rating}
                    </div>
                  </div>

                  <p className="text-neutral-300 mb-4 font-['Poppins,_sans-serif']">
                    {remedy.shortDescription}
                  </p>

                  <div className="mb-5">
                    <h4 className="text-sm uppercase tracking-wider text-neutral-400 mb-2 font-['Poppins,_sans-serif']">
                      Ingredients
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {remedy.ingredients.map((ingredient, index) => (
                        <span
                          key={index}
                          className="bg-neutral-700 text-xs px-2 py-1 rounded font-['Poppins,_sans-serif']"
                        >
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
