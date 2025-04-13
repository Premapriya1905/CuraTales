import _default from 'eslint-plugin-react-refresh'
import react from 'react'

const Navbar = () =>{
    return(
        <div>
            <nav className="fixed w-full bg-neutral-900 text-white py-4 z-50">
                <div className="container mx-auto px-4 flex justify-between items-center">

                <a href="#hero" className="text-2xl font-bold text-[#E2703A] flex items-center" target="_self">
                    <span className="font-['Poppins,_sans-serif']" >Cura</span><span className="text-[#A7C4BC] font-['Merriweather,_serif']" >Tales</span>
                </a>

                <ul className="hidden md:flex space-x-6" >
                    <li><a href="/" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" target="_self">Home</a></li>
                    <li><a href="#about" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" target="_self">About</a></li>
                    <li><a href="#features" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" target="_self">Features</a></li>
                    <li><a href="#remedies" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" target="_self">Remedies</a></li>
                    <li><a href="#community" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" target="_self">Community</a></li>
                    <li><a href="#hero" className="hover:text-[#E2703A] transition duration-300 font-['Poppins,_sans-serif']" style={{height: '97px'}} target="_self">Recipes</a></li>
                </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;