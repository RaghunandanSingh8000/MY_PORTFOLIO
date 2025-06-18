import React, { useState } from 'react';

const certificationsData = [
  {
    title: 'Open Hack in Hackathon Program',
    institution: 'M.L.V. Textile and Engineering College, Bhilwara',
    date: 'March 2024',
    image: `${import.meta.env.BASE_URL}Aset/OPEN HACK .jpg`,
    description: 'Recognized for outstanding performance and leadership in an inter-college hackathon.',
    link: 'https://example.com/hackathon-certificate'
  },
  {
    title: 'ML AI Workshop by IBM',
    institution: 'Cognizance, IIT Roorkee',
    date: 'December 2022',
    image: `${import.meta.env.BASE_URL}Aset/IBM.jpg`,
    description: 'Completed hands-on workshop on Machine Learning and Artificial Intelligence by IBM experts.',
    link: 'https://example.com/ibm-certificate'
  },
  {
    title: 'Introduction to Career Skills in Software Development',
    institution: 'LinkedIn Learning',
    date: 'August 2022',
    image: `${import.meta.env.BASE_URL}Aset/Software Development-.jpg`,
    description: 'Learned essential career skills for software development including teamwork and communication.',
    link: 'https://example.com/linkedin-certificate'
  },
];

const Certfications = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);

  const openModal = (cert) => {
    setSelectedCert(cert);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCert(null);
  };

  return (
    <section
      id="certifications"
      data-aos="fade-up"
      className="py-16 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 dark:from-blue-400 dark:via-purple-400 dark:to-pink-300 drop-shadow-lg">
        Certifications
      </h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto certifications-container">
        {certificationsData.map((cert, idx) => (
          <div
            key={idx}
            className="relative bg-white/90 dark:bg-gray-800/90 rounded-3xl shadow-2xl p-6 flex flex-col justify-between border-2 border-transparent hover:border-blue-400 dark:hover:border-purple-400 hover:scale-105 transition-all duration-300 group"
          >
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-14 h-14 object-cover rounded-full border-2 border-white dark:border-gray-900"
              />
            </div>
            <div className="mt-10">
              <h3 className="text-lg font-bold mb-2 text-blue-700 dark:text-blue-400 text-center">{cert.title}</h3>
              <p className="mb-1 text-gray-700 dark:text-gray-200 text-center">
                <span className="font-semibold text-purple-700 dark:text-purple-400">Institution:</span> {cert.institution}
              </p>
              <p className="mb-1 text-gray-700 dark:text-gray-200 text-center">
                <span className="font-semibold text-pink-700 dark:text-pink-400">Date:</span> {cert.date}
              </p>
              <p className="mb-3 text-gray-600 dark:text-gray-300 text-sm text-center">{cert.description}</p>
            </div>
            <div className="flex flex-col gap-2 mt-4 mx-auto">
              <button
                onClick={() => openModal(cert)}
                className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 transition font-semibold text-base"
              >
                <i className="fas fa-file-alt"></i> View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Certificates */}
      {modalOpen && selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-purple bg-opacity-70 modal">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 relative modal-content max-w-lg w-full shadow-2xl">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-3xl text-gray-700 dark:text-gray-200 close-btn hover:text-red-500 transition"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedCert.image}
              alt={selectedCert.title}
              className="w-full h-80 object-contain rounded-xl mb-4 border-4 border-blue-600 dark:border-purple-500 shadow-lg"
              id="certificateImage"
            />
            <h3 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-400">{selectedCert.title}</h3>
            <p className="mb-1 text-gray-700 dark:text-gray-200">
              <span className="font-semibold text-purple-700 dark:text-purple-400">Institution:</span> {selectedCert.institution}
            </p>
            <p className="mb-1 text-gray-700 dark:text-gray-200">
              <span className="font-semibold text-pink-700 dark:text-pink-400">Date:</span> {selectedCert.date}
            </p>
            <p className="mb-2 text-gray-600 dark:text-gray-300 text-base">{selectedCert.description}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certfications;