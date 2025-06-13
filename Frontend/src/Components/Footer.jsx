import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 mt-16 border-t-2 border-blue-200 dark:border-purple-800 shadow-inner">
    <div className="footer-container max-w-4xl mx-auto flex flex-col items-center gap-3 text-center">
      <div className="flex gap-4 justify-center mb-2">
        <a
          href="mailto:raghunandansingh@gmail.com"
          className="text-blue-600 dark:text-blue-400 hover:text-purple-600 dark:hover:text-pink-400 transition"
          aria-label="Email"
        >
          <i className="fas fa-envelope text-xl"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/raghunandan-singh-rathore-7b0b3b1b4/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 dark:text-blue-400 hover:text-purple-600 dark:hover:text-pink-400 transition"
          aria-label="LinkedIn"
        >
          <i className="fab fa-linkedin text-xl"></i>
        </a>
        <a
          href="https://github.com/RaghunandanSingh8000/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 dark:text-gray-200 hover:text-purple-600 dark:hover:text-pink-400 transition"
          aria-label="GitHub"
        >
          <i className="fab fa-github text-xl"></i>
        </a>
      </div>
      <p className="text-gray-700 dark:text-gray-300 text-base">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-blue-700 dark:text-blue-400">Raghunandan Singh Rathore</span> | All Rights Reserved.
      </p>
      
    </div>
  </footer>
);

export default Footer;