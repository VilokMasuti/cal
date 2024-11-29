import { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="w-32 h-8"
                src="/public/ivf-pulse-logo.png"
                alt="Workflow"
              />
            </div>
          </div>

          {/* Desktop Links (only visible on lg and above screens) */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Donor Programme
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Fertility Preservation
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Advanced Treatments
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Infertility Treatments
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              IVF Testing
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <button className="bg-[#E85B5B] hover:bg-[#d45151] text-white px-4 py-2 rounded-md">
              Talk to Us →
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Links (only visible on small screens) */}
        {isMenuOpen && (
          <div className="lg:hidden space-y-4 mt-4">
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Donor Programme
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Fertility Preservation
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Advanced Treatments
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              Infertility Treatments
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              IVF Testing
            </a>
            <a href="#" className="block text-gray-600 hover:text-gray-900">
              About Us
            </a>
            <button className="bg-[#E85B5B] hover:bg-[#d45151] text-white w-full py-2 rounded-md">
              Talk to Us →
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
