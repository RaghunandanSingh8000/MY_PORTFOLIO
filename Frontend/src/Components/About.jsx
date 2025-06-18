import React, { useState } from 'react';

// Use import.meta.env.BASE_URL for public assets
const ABOUT_IMG = `${import.meta.env.BASE_URL}Aset/Raghunandan.png`;
const RESUME_PDF = `${import.meta.env.BASE_URL}Aset/Raghunandan_Singh_ Rathore.pdf`;

const About = () => {
  const [showPhotoModal, setShowPhotoModal] = useState(false);

  const handlePhotoClick = () => setShowPhotoModal(true);
  const handleCloseModal = () => setShowPhotoModal(false);

  return (
    <section
      id="about"
      data-aos="fade-up"
      className="py-16 px-2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 transition-colors duration-500"
    >
      <h2
        id="typing-effect"
        className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 tracking-tight drop-shadow-lg relative"
      >
        About Me
        <span className="block mx-auto mt-2 w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 max-w-4xl mx-auto bg-white/90 rounded-2xl shadow-xl p-4 sm:p-8 md:p-10 border border-blue-100 transition-colors duration-500">
        {/* Profile Image */}
        <div className="flex-shrink-0 mb-6 md:mb-0">
          <a href={ABOUT_IMG} target="_blank" rel="noopener noreferrer">
            <img
              src={ABOUT_IMG}
              alt="Raghunandan Singh Rathore's Profile"
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-500 shadow-lg cursor-pointer hover:scale-105 hover:shadow-blue-400/70 hover:ring-4 hover:ring-blue-300 transition-transform duration-300"
              onClick={handlePhotoClick}
            />
          </a>
        </div>

        {/* Modal for Photo View */}
        {showPhotoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="bg-white rounded-2xl p-6 sm:p-8 relative max-w-xs sm:max-w-md w-full flex flex-col items-center shadow-2xl">
              <button
                onClick={handleCloseModal}
                className="absolute top-3 right-3 text-3xl text-gray-700 hover:text-red-500 transition"
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={ABOUT_IMG}
                alt="Profile Picture"
                className="w-40 h-40 sm:w-56 sm:h-56 object-cover rounded-full border-4 border-blue-600 shadow-lg"
              />
            </div>
          </div>
        )}

        {/* About Text */}
        <div className="text-gray-800 text-base sm:text-lg">
          <p className="mb-4">
            Hello! I am{' '}
            <strong className="text-blue-700">Raghunandan Singh Rathore</strong>, a dedicated{' '}
            <span className="font-semibold text-purple-700">Web Developer</span> specializing in modern technologies like{' '}
            <span className="font-semibold text-blue-600">React.js</span>,{' '}
            <span className="font-semibold text-green-700">Node.js</span>, and{' '}
            <span className="font-semibold text-emerald-700">MongoDB</span>. I am passionate about building user-friendly, efficient, and scalable web applications.
          </p>
          <p className="mb-4">
            With a strong foundation in <span className="font-semibold text-indigo-700">Information Technology</span>, I am currently pursuing my <span className="font-semibold text-blue-700">B.Tech</span> at{' '}
            <em className="text-pink-700">MLV Textile &amp; Engineering College, Bhilwara</em>. I thrive on solving complex problems and delivering impactful solutions.
          </p>
          <p className="mb-4">
            My goal is to <span className="font-semibold text-purple-700">continuously learn and grow</span> as a developer while contributing to innovative projects that make a difference.
          </p>
          
          {/* Download CV Button */}
          <div className="mt-8 flex">
            <a
              href={RESUME_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 hover:scale-105 transition font-semibold text-lg"
            >
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;