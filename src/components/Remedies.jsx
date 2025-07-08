import { useState, useEffect } from "react";
import Navbar from "./navbar";
import RemedyModal from "./RemedyModal";
import remediesData from "../Data/remediesData";
import { useLocation } from "react-router-dom";

function Remedies() {
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const filteredRemedies = remediesData.filter((remedy) => {
  const normalizedCategory = remedy.category.toLowerCase().replace(/\s/g, '');
  const normalizedActiveCategory = activeCategory.toLowerCase().replace(/\s/g, '');

  const matchesSearch =
    remedy.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    normalizedCategory.includes(searchTerm.toLowerCase().replace(/\s/g, ''));

  const matchesCategory =
    normalizedActiveCategory === "all" ||
    normalizedCategory.includes(normalizedActiveCategory);

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

  useEffect(() => {
  const params = new URLSearchParams(location.search);
  const tag = params.get("search");

  if (tag) {
    setSearchTerm(tag);
    setActiveCategory(tag.toLowerCase());
  }
}, [location.search]);


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
                placeholder="Search for a remedy..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-800 text-white border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-[#5E8B7E]"
              />
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400">
                🔍
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 remedy-tabs mb-15">
            {[
              { label: "All Remedies", value: "all" },
              { label: "Cold & Cough", value: "cold" },
              { label: "Fever", value: "fever" },
              { label: "Skin Care", value: "skin" },
              { label: "Pain Relief", value: "pain" },
              { label: "Stomach problems", value: "stomach" },
              { label: "Immunity", value: "immunity" },
              { label: "Urinary", value: "urinary" },
              { label: "Women's health", value: "women's health" },
              { label: "Other's", value: "other's" },
            ].map((cat) => (
              <button
                key={cat.value}
                className={`px-5 py-2 rounded-full transition duration-300 font-['Poppins,_sans-serif']
                  ${
                    activeCategory === cat.value
                      ? "bg-[#5E8B7E] text-white"
                      : "bg-neutral-800 text-white hover:bg-[#5E8B7E]"
                  }`}
                onClick={() => setActiveCategory(cat.value)}
              >
                {cat.label}
              </button>
            ))}
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
