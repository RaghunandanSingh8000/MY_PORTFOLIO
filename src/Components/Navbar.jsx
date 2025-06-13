import React, { useState } from 'react';

// Add a unique color for each nav link (for hover or underline)
const navLinks = [
  { name: 'About', to: '/#about', color: 'from-blue-500 to-blue-300' },
  { name: 'Internship / Training', to: '/#internship-training', color: 'from-purple-500 to-purple-300' },
  { name: 'Skills', to: '/#skills', color: 'from-pink-500 to-pink-300' },
  { name: 'Projects', to: '/#projects', color: 'from-fuchsia-500 to-fuchsia-300' },
  { name: 'Certifications', to: '/#certifications', color: 'from-emerald-500 to-emerald-300' },
  { name: 'Contact', to: '/#contact', color: 'from-orange-500 to-orange-300' }
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll for hash links
  const handleNavClick = (e, to) => {
    if (to.startsWith('/#')) {
      e.preventDefault();
      const id = to.replace('/#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-50 via-fuchsia-100 to-purple-100 shadow">
      <nav className="flex items-center justify-between px-4 py-2 md:py-3 max-w-7xl mx-auto">
        {/* Logo and Name */}
        <div className="flex items-center gap-2 md:gap-3">
          <img
            src="/Aset/RS.jpg"
            alt="Raghunandan Singh Logo"
            className="h-8 w-8 rounded-full border-2 border-blue-600 shadow-md hover:scale-110 transition"
          />
          <span className="font-extrabold text-lg md:text-xl text-blue-700 tracking-tight whitespace-nowrap">
            Raghunandan Singh 
          </span>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden text-2xl text-blue-700 focus:outline-none"
          aria-label="Toggle Navigation Menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <i className="fas fa-bars"></i>
        </button>
        {/* Nav Links */}
        <ul
          className={`nav-links flex-col md:flex-row md:flex gap-0 md:gap-2 lg:gap-4 font-medium text-gray-700 absolute md:static top-14 left-0 w-full md:w-auto bg-white/95 md:bg-transparent shadow md:shadow-none transition-all duration-300 ${
            menuOpen ? 'flex' : 'hidden md:flex'
          }`}
        >
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`relative group hover:text-fuchsia-600 transition`}
            >
              <a
                href={link.to}
                onClick={(e) => handleNavClick(e, link.to)}
                className="block px-4 py-2 md:px-2"
              >
                {link.name}
                {/* Unique colored underline on hover */}
                <span
                  className={`absolute left-0 bottom-1 w-full h-0.5 bg-gradient-to-r ${link.color} rounded transition-all duration-300 scale-x-0 group-hover:scale-x-100`}
                ></span>
              </a>
            </li>
          ))}
        </ul>
        {/* Theme Toggle Removed */}
      </nav>
      <div id="progress-bar" className="h-1 bg-gradient-to-r from-blue-500 via-fuchsia-500 to-purple-500 w-0 transition-all duration-300"></div>
    </header>
  );
};

export default Navbar;