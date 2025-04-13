import { useState, useEffect, useRef } from "react";
import Navbar from "../components/navbar";
import remediesData from "../Data/remediesData";
import RemedyModal from "./RemedyModal";
import { Link } from "react-router-dom";

const Landing = () => {
  const [selectedRemedy, setSelectedRemedy] = useState(null);
  const firstSixRemedies = remediesData.slice(0, 6);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        closeModal();
      }
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    <div>
      <Navbar />

      {/* section1 */}
      <section className="bg-neutral-900 text-white pt-24 pb-16 md:py-32 min-h-[70vh] flex items-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#5E8B7E] opacity-10 rounded-full -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E2703A] opacity-10 rounded-full -ml-48 -mb-48"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div
              className="animate__animated animate__fadeInLeft"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-[#E2703A] font-['Poppins,_sans-serif']">
                  Traditional Wisdom
                </span>
                <span className="block font-['Merriweather,_serif']">
                  Modern Healing
                </span>
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 font-['Poppins,_sans-serif']">
                Discover and share time-tested home remedies passed down through
                generations. Natural solutions for everyday ailments without
                side effects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/remedies"
                  className="bg-[#E2703A] hover:bg-[#d15f2a] text-white py-3 px-6 rounded-lg font-medium transition duration-300 text-center animate__animated animate__pulse animate__infinite animate__slower font-['Poppins,_sans-serif']"
                  style={{ visibility: "visible", animationDelay: "0s" }}
                  id="el-p1fywdsc"
                  target="_self"
                >
                  Explore Remedies
                </a>
                <button onClick={openModal}
                  className="bg-transparent border-2 border-[#A7C4BC] hover:bg-[#A7C4BC] hover:text-neutral-900 text-[#A7C4BC] py-3 px-6 rounded-lg font-medium transition duration-300 text-center font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Share Your Wisdom
                </button>
              </div>
            </div>

            <div
              className="relative mb-10"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="bg-neutral-800 p-6 md:p-8 rounded-2xl shadow-lg border border-neutral-700 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-[#5E8B7E] w-24 h-24 rounded-full opacity-20 -mr-12 -mt-12"></div>

                <h2 className="text-xl md:text-2xl font-semibold mb-6 font-['Merriweather,_serif']">
                  Find Natural Remedies
                </h2>

                <div className="mb-6 relative">
                  <input
                    type="text"
                    placeholder="Search symptoms or ailments..."
                    className="w-full bg-neutral-700 border border-neutral-600 rounded-lg py-3 px-4 text-white placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#E2703A]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="popular-tag bg-neutral-700 hover:bg-[#5E8B7E] text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 font-['Poppins,_sans-serif']">
                    Cough
                  </span>
                  <span className="popular-tag bg-neutral-700 hover:bg-[#5E8B7E] text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 font-['Poppins,_sans-serif']">
                    Fever
                  </span>
                  <span className="popular-tag bg-neutral-700 hover:bg-[#5E8B7E] text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 font-['Poppins,_sans-serif']">
                    Cold
                  </span>
                  <span className="popular-tag bg-neutral-700 hover:bg-[#5E8B7E] text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 font-['Poppins,_sans-serif']">
                    Headache
                  </span>
                  <span className="popular-tag bg-neutral-700 hover:bg-[#5E8B7E] text-sm py-1 px-3 rounded-full cursor-pointer transition duration-300 font-['Poppins,_sans-serif']">
                    Digestion
                  </span>
                </div>
              </div>

              <div
                className="hidden md:block absolute -bottom-6 -right-6 bg-[#E2703A] text-white p-4 rounded-lg transform rotate-3 shadow-lg z-10 max-w-[200px] animate__animated animate__bounceIn animate__delay-1s font-['Merriweather,_serif']"
                style={{ visibility: "visible", animationDelay: "0s" }}
              >
                <p className="text-sm italic">
                  "My grandmother's turmeric milk remedy cured my cold in just 2
                  days!"
                </p>
                <div className="flex items-center mt-2">
                  <div className="w-6 h-6 rounded-full bg-neutral-300 flex items-center justify-center text-neutral-800 font-bold text-xs">
                    S
                  </div>
                  <span className="text-xs ml-2">Sara T.</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 md:mt-16 text-center">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-[#A7C4BC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  ></path>
                </svg>
                <div className="ml-3 text-left">
                  <h3 className="font-medium text-[#A7C4BC] font-['Poppins,_sans-serif']">
                    Natural Solutions
                  </h3>
                  <p className="text-sm opacity-80 font-['Poppins,_sans-serif']">
                    Time-tested &amp; safe
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-[#A7C4BC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <div className="ml-3 text-left">
                  <h3 className="font-medium text-[#A7C4BC] font-['Poppins,_sans-serif']">
                    Community Wisdom
                  </h3>
                  <p className="text-sm opacity-80 font-['Poppins,_sans-serif']">
                    1000+ shared remedies
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="h-8 w-8 text-[#A7C4BC]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  ></path>
                </svg>
                <div className="ml-3 text-left">
                  <h3 className="font-medium text-[#A7C4BC] font-['Poppins,_sans-serif']">
                    Organized Categories
                  </h3>
                  <p className="text-sm opacity-80 font-['Poppins,_sans-serif']">
                    Easy to navigate
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate__animated animate__bounce animate__infinite animate__slower"
          style={{ visibility: "visible", animationDelay: "0s" }}
        >
          <a
            href="#about"
            className="text-white opacity-80 hover:opacity-100 transition duration-300"
            target="_self"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </section>

      {/* section2 */}

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            style={{ visibility: "visible", animationDelay: "0s" }}
          >
            <span className="text-[#E2703A] uppercase tracking-wider text-sm font-medium font-['Poppins,_sans-serif']">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-neutral-800 font-['Merriweather,_serif']">
              Reviving Ancestral Healing Wisdom
            </h2>
            <div className="w-20 h-1 bg-[#5E8B7E] mx-auto mt-4"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div
              className="order-2 md:order-1 animate__animated animate__fadeInLeft"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-neutral-800 font-['Merriweather,_serif']">
                Our Mission
              </h3>
              <p className="text-neutral-700 mb-6 leading-relaxed font-['Poppins,_sans-serif']">
                CuraTales was created with a simple yet powerful mission: to
                preserve and share traditional healing wisdom that has been
                passed down through generations. In a world dominated by modern
                medicine, we believe there's immense value in the time-tested
                remedies our ancestors relied upon.
              </p>
              <p className="text-neutral-700 mb-8 leading-relaxed font-['Poppins,_sans-serif']">
                We provide a platform where people can discover natural
                solutions for common ailments without side effects, using
                ingredients often found right in their kitchen. By building a
                community of knowledge-sharers, we aim to keep traditional
                healing practices alive and accessible to everyone.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#A7C4BC] bg-opacity-20 p-4 rounded-lg">
                  <div className="text-[#5E8B7E] text-xl font-bold mb-1">
                    1000+
                  </div>
                  <div className="text-neutral-700 text-sm font-['Poppins,_sans-serif']">
                    Traditional Remedies
                  </div>
                </div>
                <div className="bg-[#A7C4BC] bg-opacity-20 p-4 rounded-lg">
                  <div className="text-[#5E8B7E] text-xl font-bold mb-1">
                    15k+
                  </div>
                  <div className="text-neutral-700 text-sm font-['Poppins,_sans-serif']">
                    Community Members
                  </div>
                </div>
                <div className="bg-[#A7C4BC] bg-opacity-20 p-4 rounded-lg">
                  <div className="text-[#5E8B7E] text-xl font-bold mb-1">
                    50+
                  </div>
                  <div className="text-neutral-700 text-sm font-['Poppins,_sans-serif']">
                    Ailment Categories
                  </div>
                </div>
                <div className="bg-[#A7C4BC] bg-opacity-20 p-4 rounded-lg">
                  <div className="text-[#5E8B7E] text-xl font-bold mb-1">
                    100%
                  </div>
                  <div className="text-neutral-700 text-sm font-['Poppins,_sans-serif']">
                    Natural Solutions
                  </div>
                </div>
              </div>
            </div>

            <div
              className="order-1 md:order-2 animate__animated animate__fadeInRight"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="relative">
                <div className="bg-[#E2703A] rounded-lg p-8 text-white relative z-10">
                  <svg
                    className="h-10 w-10 text-white opacity-80 mb-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      id="el-36ov5sdm"
                    ></path>
                  </svg>
                  <p className="italic mb-6 font-['Merriweather,_serif']">
                    "In the whispers of our elders lie the secrets to natural
                    healing that modern medicine often overlooks. These
                    remedies, tested through time, are our heritage and our
                    future."
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#E2703A] font-bold">
                      PP
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold font-['Poppins,_sans-serif']">
                        Premapriya
                      </div>
                      <div className="text-sm opacity-80 font-['Poppins,_sans-serif']">
                        Founder, CuraTales
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 bottom-6 left-6 border-4 border-[#5E8B7E] rounded-lg -z-10"></div>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="bg-neutral-100 p-4 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      id="el-vcpotxwu"
                    ></path>
                  </svg>
                </div>
                <div className="bg-neutral-100 p-4 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      id="el-ds3goxul"
                    ></path>
                  </svg>
                </div>
                <div className="bg-neutral-100 p-4 rounded-lg flex items-center justify-center">
                  <svg
                    className="h-10 w-10 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                      id="el-gp5nh6kt"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div
              className="text-center mb-12 animate__animated animate__fadeIn"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 font-['Merriweather,_serif']">
                Why CuraTales?
              </h3>
              <p className="text-neutral-600 mt-4 max-w-3xl mx-auto font-['Poppins,_sans-serif']">
                Our platform brings together ancestral wisdom and modern
                accessibility to create a unique healing experience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div
                className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-1s"
                style={{ visibility: "visible", animationDelay: "0s" }}
              >
                <div className="bg-[#A7C4BC] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                      id="el-x00cce4j"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Natural &amp; Side-Effect Free
                </h4>
                <p className="text-neutral-600 font-['Poppins,_sans-serif']">
                  Our remedies use natural ingredients that work with your body,
                  not against it. Say goodbye to unwanted side effects and
                  embrace holistic healing.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-2s"
                style={{ visibility: "visible", animationDelay: "0s" }}
              >
                <div className="bg-[#A7C4BC] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      id="el-9yxfkm5j"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Community Verified
                </h4>
                <p className="text-neutral-600 font-['Poppins,_sans-serif']">
                  Every remedy is reviewed and verified by our community. Real
                  people sharing real experiences ensures you get trusted
                  solutions.
                </p>
              </div>

              <div
                className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-3s"
                style={{ visibility: "visible", animationDelay: "0s" }}
              >
                <div className="bg-[#A7C4BC] bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    ></path>
                  </svg>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Accessible Anywhere
                </h4>
                <p className="text-neutral-600 font-['Poppins,_sans-serif']">
                  Access healing wisdom anytime, anywhere. Our platform works on
                  all devices, ensuring you have remedies at your fingertips
                  when you need them most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section3 */}

      <section id="features" className="py-20 bg-neutral-100">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            style={{ visibility: "visible", animationDelay: "0s" }}
          >
            <span className="text-[#E2703A] uppercase tracking-wider text-sm font-medium font-['Poppins,_sans-serif']">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-neutral-800 font-['Merriweather,_serif']">
              Discover Our Healing Ecosystem
            </h2>
            <div className="w-20 h-1 bg-[#5E8B7E] mx-auto mt-4"></div>
            <p className="text-neutral-600 mt-6 max-w-3xl mx-auto font-['Poppins,_sans-serif']">
              CuraTales brings together powerful tools and features to help you
              discover, share, and benefit from traditional healing wisdom.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Feature 1 --> */}
            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#5E8B7E]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#A7C4BC] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Remedy Database
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Access our extensive collection of verified home remedies for
                  everyday ailments, categorized and searchable by symptoms,
                  ingredients, or remedy types.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    1000+ traditional remedies
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Advanced search filters
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Verified by community
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#5E8B7E] font-medium hover:text-[#497a6d] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Explore Remedies
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Feature 2 --> */}

            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-1s"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#E2703A]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#E2703A] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#E2703A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  User Contributions
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Share your family's traditional remedies with our community.
                  Preserve wisdom that might otherwise be lost and help others
                  with your knowledge.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Simple submission process
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Credit for your contributions
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Community feedback system
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#E2703A] font-medium hover:text-[#c75a2b] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Share Your Wisdom
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Feature 3 --> */}

            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-2s"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#A7C4BC]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#A7C4BC] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                      id="el-29yopsem"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Organized Categories
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Find remedies quickly with our intuitive categorization
                  system. Browse by ailment type, ingredient, or healing method
                  to discover what you need.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    50+ ailment categories
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Ingredient-based filtering
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Easy-to-navigate structure
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#5E8B7E] font-medium hover:text-[#497a6d] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Browse Categories
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Feature 4 --> */}

            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#5E8B7E]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#A7C4BC] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Community Forum
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Connect with fellow traditional healing enthusiasts. Ask
                  questions, share experiences, and discuss the effectiveness of
                  different remedies.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Active discussion threads
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Expert moderators
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Topic-based organization
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#5E8B7E] font-medium hover:text-[#497a6d] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Join Community
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Feature 5 --> */}

            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-1s"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#E2703A]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#E2703A] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#E2703A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Search &amp; Filters
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Find exactly what you need with our powerful search and
                  filtering system. Search by symptoms, ingredients, or remedy
                  effectiveness.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Symptom-based search
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Ingredient availability filter
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Effectiveness rating sort
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#E2703A] font-medium hover:text-[#c75a2b] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Try Advanced Search
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* <!-- Feature 6 --> */}

            <div
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:-translate-y-2 animate__animated animate__fadeInUp animate__delay-2s"
              style={{ visibility: "visible", animationDelay: "0s" }}
            >
              <div className="h-3 bg-[#A7C4BC]"></div>
              <div className="p-6">
                <div className="w-14 h-14 bg-[#A7C4BC] bg-opacity-20 rounded-lg flex items-center justify-center mb-5">
                  <svg
                    className="h-8 w-8 text-[#5E8B7E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-neutral-800 font-['Merriweather,_serif']">
                  Healthy Recipes
                </h3>
                <p className="text-neutral-600 mb-4 font-['Poppins,_sans-serif']">
                  Discover nutritious and delicious recipes that promote
                  everyday wellness. From immunity-boosting soups to
                  anti-inflammatory dishes.
                </p>
                <ul className="space-y-2 mb-5">
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Health-focused recipes
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Nutritional information
                  </li>
                  <li className="flex items-center text-neutral-600 font-['Poppins,_sans-serif']">
                    <svg
                      className="h-5 w-5 mr-2 text-[#E2703A]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    Traditional cooking methods
                  </li>
                </ul>
                <a
                  href="#remedies"
                  className="text-[#5E8B7E] font-medium hover:text-[#497a6d] inline-flex items-center transition duration-300 font-['Poppins,_sans-serif']"
                  target="_self"
                >
                  Explore Recipes
                  <svg
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div
            className="mt-16 bg-gradient-to-r from-[#5E8B7E] to-[#A7C4BC] rounded-xl p-8 md:p-10 text-white shadow-lg animate__animated animate__fadeIn"
            style={{ visibility: "visible", animationDelay: "0s" }}
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 md:mr-8">
                <h3 className="text-2xl font-bold mb-4 font-['Merriweather,_serif']">
                  Ready to explore traditional wisdom?
                </h3>
                <p className="text-white opacity-90 max-w-xl font-['Poppins,_sans-serif']">
                  Join thousands of users who are discovering natural remedies
                  and sharing their family's healing traditions.
                </p>
              </div>
              <div className="flex-shrink-0">
                <a
                  href="#remedies"
                  className="bg-white text-[#5E8B7E] hover:bg-neutral-100 px-6 py-3 rounded-lg font-medium transition duration-300 inline-block shadow-md font-['Poppins,_sans-serif']"
                  id="el-0kpz92zy"
                  target="_self"
                >
                  Join CuraTales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section4 */}
      <section id="remedies" className="remedies py-20 bg-neutral-900 text-white">
        <div className="container mx-auto px-4">
          <div
            className="text-center mb-16 animate__animated animate__fadeIn"
            style={{ visibility: "visible", animationDelay: "0s" }}
          >
            <span className="text-[#E2703A] uppercase tracking-wider text-sm font-medium font-['Poppins,_sans-serif']">
              Popular Remedies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 font-['Merriweather,_serif']">
              Traditional Cures For Common Ailments
            </h2>
            <div className="w-20 h-1 bg-[#A7C4BC] mx-auto mt-4"></div>
            <p className="text-white opacity-80 mt-6 max-w-3xl mx-auto font-['Poppins,_sans-serif']">
              Discover time-tested natural remedies passed down through
              generations. These solutions use simple ingredients found in most
              kitchens.
            </p>
          </div>

          <div
            className="flex flex-wrap justify-center gap-2 md:gap-4 remedy-tabs mb-15"
            id="el-hmbecuv4"
          >
            <button
              className="px-5 py-2 rounded-full bg-[#5E8B7E] text-white active font-['Poppins,_sans-serif']"
              data-category="all"
              id="el-kmomauvw"
            >
              All Remedies
            </button>
            <button
              className="px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-[#5E8B7E] transition duration-300 font-['Poppins,_sans-serif']"
              data-category="cold"
              id="el-tdxggd77"
            >
              Cold &amp; Cough
            </button>
            <button
              className="px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-[#5E8B7E] transition duration-300 font-['Poppins,_sans-serif']"
              data-category="fever"
              id="el-u5yeosgu"
            >
              Fever
            </button>
            <button
              className="px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-[#5E8B7E] transition duration-300 font-['Poppins,_sans-serif']"
              data-category="digestive"
              id="el-zfb8cvsv"
            >
              Digestive
            </button>
            <button
              className="px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-[#5E8B7E] transition duration-300 font-['Poppins,_sans-serif']"
              data-category="skin"
              id="el-6df1jomi"
            >
              Skin Care
            </button>
            <button
              className="px-5 py-2 rounded-full bg-neutral-800 text-white hover:bg-[#5E8B7E] transition duration-300 font-['Poppins,_sans-serif']"
              data-category="pain"
              id="el-3ar64zlk"
            >
              Pain Relief
            </button>
          </div>

          {/* Remedy Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 remedy-cards">
            {firstSixRemedies.map((remedy) => (
              <div
                key={remedy.id}
                className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:-translate-y-2 remedy-card"
                data-category={remedy.category
                  .toLowerCase()
                  .replace(" & ", "-")
                  .replace(" ", "-")}
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

          {/* Remedy Modal */}
          <RemedyModal
            remedy={selectedRemedy}
            onClose={() => setSelectedRemedy(null)}
          />
          <div />

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Link to="/Remedies">
              <button className="bg-[#5E8B7E] hover:bg-[#497a6d] text-white py-3 px-8 rounded-lg transition duration-300 font-['Poppins,_sans-serif']">
                View More Remedies
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* section5 */}
      <section
        id="community"
        className="py-16 bg-neutral-50 dark:bg-neutral-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-700 dark:text-emerald-400">
              Join Our Healing Community
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with like-minded individuals who share your passion for
              traditional healing methods and home remedies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* <!-- Community Feature 1 --> */}

            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                    id="el-kvr6w9is"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-white">
                Discussion Forums
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Engage in meaningful conversations about traditional remedies,
                share your experiences, and learn from others.
              </p>
            </div>

            {/* <!-- Community Feature 2 --> */}
            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-v4d6lvpm"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    id="el-xpqjhd4t"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-white">
                Member Contributions
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Submit your family's traditional remedies and receive feedback
                from our community of healing enthusiasts.
              </p>
            </div>

            {/* <!-- Community Feature 3 --> */}

            <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-6 transition-transform hover:scale-105">
              <div className="h-14 w-14 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    id="el-wrlt3kix"
                  ></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800 dark:text-white">
                Verified Remedies
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                Community-voted and expert-reviewed remedies to ensure safety
                and effectiveness for common ailments.
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg overflow-hidden mb-10">
            <div className="overflow-x-auto"></div>
          </div>

          <div className="text-center">
            <a
              href="https://rad-crisp-9bd9a7.netlify.app/"
              className="inline-block px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-300"
              target="_self"
            >
              Join Our Community
            </a>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Already a member?{" "}
              <a
                href="https://rad-crisp-9bd9a7.netlify.app/"
                className="text-emerald-600 dark:text-emerald-400 hover:underline"
                target="_self"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* section6 */}
      <section id="recipes" className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4" id="el-k2b0wg53">
          <div className="text-center mb-12" id="el-p5svbt7u">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4 text-emerald-700 dark:text-emerald-400"
              id="el-ib4f0998"
            >
              Healthy Recipes
            </h2>
            <p
              className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
              id="el-2ob6t3ho"
            >
              Discover nutritious and delicious recipes passed down through
              generations to nourish your body and soul.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            id="el-crqszbdp"
          >
            {/* <!-- Recipe Card 1 --> */}

            <div
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              id="el-od432w1g"
            >
              <div
                className="h-48 bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center"
                id="el-gm9zmc83"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-auiac0w6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                    id="el-befx1d2g"
                  ></path>
                </svg>
              </div>
              <div className="p-6" id="el-rzpk63ti">
                <div
                  className="flex justify-between items-center mb-3"
                  id="el-szmu6fxd"
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full"
                    id="el-xmwu7d1k"
                  >
                    Immunity Booster
                  </span>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400"
                    id="el-ljue7u3h"
                  >
                    20 min
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                  id="el-luoj3lar"
                >
                  Turmeric Golden Milk
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  id="el-ck853ptg"
                >
                  Ancient remedy for inflammation and immunity, passed down
                  through generations.
                </p>
                <div
                  className="flex items-center justify-between"
                  id="el-1hsnzpyq"
                >
                  <div className="flex items-center" id="el-dkzbzxqr">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-dqzzd3yp"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-3pd35uh1"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-rw9bpa36"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-1hocfecq"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-uh7o1k91"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-w4olzzq4"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-q7tnx3s2"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-1vx1cbu0"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-dela75m7"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-ozgrcod7"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="#community"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    id="el-p4llr2bu"
                    target="_self"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Recipe Card 2 --> */}

            <div
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              id="el-qi4yftwk"
            >
              <div
                className="h-48 bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center"
                id="el-ws5j1mft"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-7ma1lka9"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    id="el-pnotnyhd"
                  ></path>
                </svg>
              </div>
              <div className="p-6" id="el-r0cxkpn2">
                <div
                  className="flex justify-between items-center mb-3"
                  id="el-5venw7oi"
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full"
                    id="el-a47siryc"
                  >
                    Digestive Health
                  </span>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400"
                    id="el-ufze672t"
                  >
                    30 min
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                  id="el-gianol30"
                >
                  Ginger &amp; Lemon Soup
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  id="el-pshnmdj3"
                >
                  Traditional remedy for digestive issues and cold symptoms,
                  loved by generations.
                </p>
                <div
                  className="flex items-center justify-between"
                  id="el-0ariongb"
                >
                  <div className="flex items-center" id="el-yhunyap2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-hoq5smd5"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-l7s2v1xa"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-6730fyg4"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-9gjkz75b"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-sn13m5rc"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-6olyu5i0"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-hsc9q3j9"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-a00u2ny1"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-300 dark:text-gray-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-spd032dq"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-1d0ojyls"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="#community"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    id="el-dy5m58v6"
                    target="_self"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>

            {/* <!-- Recipe Card 3 --> */}
            <div
              className="bg-white dark:bg-neutral-800 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
              id="el-izq5lw3y"
            >
              <div
                className="h-48 bg-emerald-100 dark:bg-emerald-800 flex items-center justify-center"
                id="el-okqopk83"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-emerald-600 dark:text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  id="el-r1lwqf1n"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.701 2.701 0 00-1.5-.454M9 6v2m3-2v2m3-2v2M9 3h.01M12 3h.01M15 3h.01M21 21v-7a2 2 0 00-2-2H5a2 2 0 00-2 2v7h18zm-3-9v-2a2 2 0 00-2-2H8a2 2 0 00-2 2v2h12z"
                    id="el-t0d43oy2"
                  ></path>
                </svg>
              </div>
              <div className="p-6" id="el-8470cp8u">
                <div
                  className="flex justify-between items-center mb-3"
                  id="el-unfxdabq"
                >
                  <span
                    className="text-xs font-semibold px-2 py-1 bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 rounded-full"
                    id="el-mjr40gd7"
                  >
                    Energy Boost
                  </span>
                  <span
                    className="text-sm text-gray-600 dark:text-gray-400"
                    id="el-fsoyhduh"
                  >
                    15 min
                  </span>
                </div>
                <h3
                  className="text-xl font-semibold mb-2 text-gray-800 dark:text-white"
                  id="el-yar6i5vk"
                >
                  Honey Almond Porridge
                </h3>
                <p
                  className="text-gray-600 dark:text-gray-300 mb-4"
                  id="el-jjnby6sn"
                >
                  Wholesome breakfast recipe to boost energy and maintain health
                  throughout the day.
                </p>
                <div
                  className="flex items-center justify-between"
                  id="el-vphfginx"
                >
                  <div className="flex items-center" id="el-e62zex9u">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-iwmupf7h"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-jbiqy2ya"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-o5vu2a2b"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-wypaldma"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-in586p4k"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-8iw8v1vy"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-t703dgf3"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-o7kuopnv"
                      ></path>
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-amber-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      id="el-dtraseh4"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                        id="el-vlbcoktx"
                      ></path>
                    </svg>
                  </div>
                  <a
                    href="#community"
                    className="text-emerald-600 dark:text-emerald-400 hover:underline font-medium"
                    id="el-rw9htbkd"
                    target="_self"
                  >
                    View Recipe
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Recipe CTA */}
          <div className="bg-emerald-100 dark:bg-emerald-900/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-emerald-800 dark:text-emerald-200">
              Share Your Family's Wisdom
            </h3>
            <p className="text-emerald-700 dark:text-emerald-300 mb-6 max-w-2xl mx-auto">
              Do you have a traditional recipe passed down through generations?
            </p>
            <button
              onClick={openModal}
              className="inline-block px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              Submit Your Remedy
            </button>
          </div>

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
              <div
                ref={modalRef}
                className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                    Submit Your Remedy
                  </h3>
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div
                  className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-8"
                  id="el-3qllha91"
                >
                  <h3
                    className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white"
                    id="el-nollvv8a"
                  >
                    Submit Your Remedy
                  </h3>

                  <form id="el-vxf201nf">
                    <div className="mb-5" id="el-o4fisax8">
                      <label
                        for="remedyTitle"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-8rrv9oh0"
                      >
                        Remedy Title*
                      </label>
                      <input
                        type="text"
                        id="remedyTitle"
                        name="remedyTitle"
                        placeholder="e.g., Grandmother's Ginger Tea for Colds"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                        required=""
                      />
                    </div>

                    <div className="mb-5" id="el-q7pxp7bk">
                      <label
                        for="ailmentCategory"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-jmep6t84"
                      >
                        For Which Ailment/Condition?*
                      </label>
                      <select
                        id="ailmentCategory"
                        name="ailmentCategory"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                        required=""
                      >
                        <option
                          value=""
                          disabled=""
                          selected=""
                          id="el-rqt7s5y6"
                        >
                          Select a category
                        </option>
                        <option value="cold" id="el-z6v4yc6h">
                          Cold &amp; Flu
                        </option>
                        <option value="cough" id="el-9izan3on">
                          Cough
                        </option>
                        <option value="fever" id="el-sugi19lu">
                          Fever
                        </option>
                        <option value="digestive" id="el-4762vs91">
                          Digestive Issues
                        </option>
                        <option value="skin" id="el-l7uylzga">
                          Skin Problems
                        </option>
                        <option value="pain" id="el-zxt4365z">
                          Pain Relief
                        </option>
                        <option value="sleep" id="el-o4br23wy">
                          Sleep Issues
                        </option>
                        <option value="stress" id="el-eu4tnopp">
                          Stress &amp; Anxiety
                        </option>
                        <option value="womensHealth" id="el-0p2dsmuo">
                          Women's Health
                        </option>
                        <option value="immunity" id="el-iwi83ka3">
                          Immunity Boosting
                        </option>
                        <option value="other" id="el-pmzleei7">
                          Other (Please specify)
                        </option>
                      </select>
                    </div>

                    <div className="mb-5" id="el-2p5rukwh">
                      <label
                        for="ingredients"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-vp593jp5"
                      >
                        Ingredients*
                      </label>
                      <textarea
                        id="ingredients"
                        name="ingredients"
                        rows="3"
                        placeholder="List all ingredients with approximate quantities"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                        required=""
                      ></textarea>
                    </div>

                    <div className="mb-5" id="el-2902kvcd">
                      <label
                        for="preparation"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-2jabtbb9"
                      >
                        Preparation Method*
                      </label>
                      <textarea
                        id="preparation"
                        name="preparation"
                        rows="4"
                        placeholder="Explain how to prepare this remedy"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                        required=""
                      ></textarea>
                    </div>

                    <div className="mb-5" id="el-6t3rprsk">
                      <label
                        for="usage"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-rguperu5"
                      >
                        How to Use*
                      </label>
                      <textarea
                        id="usage"
                        name="usage"
                        rows="2"
                        placeholder="How often should this remedy be used? Any specific instructions?"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                        required=""
                      ></textarea>
                    </div>

                    <div className="mb-5" id="el-qedy9jlo">
                      <label
                        for="origin"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-ynw1dya9"
                      >
                        Origin/Background (Optional)
                      </label>
                      <textarea
                        id="origin"
                        name="origin"
                        rows="2"
                        placeholder="Share the story behind this remedy. Is it from your grandmother? A family tradition?"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                      ></textarea>
                    </div>

                    <div className="mb-6" id="el-0t8o759d">
                      <label
                        for="precautions"
                        className="block text-gray-700 dark:text-gray-300 mb-2"
                        id="el-au61o2et"
                      >
                        Precautions/Side Effects (Optional but Recommended)
                      </label>
                      <textarea
                        id="precautions"
                        name="precautions"
                        rows="2"
                        placeholder="Any known allergies, contraindications, or precautions users should be aware of?"
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white dark:bg-neutral-700 text-gray-800 dark:text-white"
                      ></textarea>
                    </div>

                    <div className="mb-6" id="el-uan156hy">
                      <div className="flex items-center" id="el-8ynkyosn">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          className="h-5 w-5 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                          required=""
                        />
                        <label
                          for="consent"
                          className="ml-2 block text-gray-700 dark:text-gray-300"
                          id="el-b8mwsrqv"
                        >
                          I confirm this is a traditional remedy and all
                          information provided is accurate to the best of my
                          knowledge.*
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-300"
                      id="el-p0ds9ldg"
                    >
                      Submit Remedy
                    </button>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Landing;
