import React from 'react';

const projectsData = [
  {
    name: 'DocuCare ',
    description: 'A hospital management system for patient registration, appointment scheduling, billing, and doctor dashboard.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://docucare-frontend.onrender.com/',
    github: 'https://github.com/RaghunandanSingh8000/DocuCare'
  },
  
  {
    name: 'ShopCart',
    description: 'An e-commerce platform with shopping cart, secure authentication, payment integration, and admin dashboard.',
    technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    link: 'https://shopping-cart-six-puce.vercel.app/',
    github: 'https://github.com/RaghunandanSingh8000/Shopping-Cart'
  },
  
  {
    name: 'Expense Tracker',
    description: 'A simple tool to track your expenses, income, and savings efficiently. Includes charts and export to CSV.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://raghunandansingh8000.github.io/-Expense-Tracker/',
    github: 'https://github.com/RaghunandanSingh8000/-Expense-Tracker'
  },
  
];

const Projects = () => {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-12 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 min-h-screen"
    >
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300">
        Projects
      </h2>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto project-grid px-4">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-xl p-7 flex flex-col justify-between hover:shadow-2xl transition-shadow border border-blue-200 dark:border-gray-700 hover:border-pink-400 dark:hover:border-pink-400"
          >
            <div>
              <h3 className="text-2xl font-bold mb-2 text-blue-800 dark:text-pink-300">{project.name}</h3>
              <p className="mb-3 text-gray-700 dark:text-gray-200">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-gradient-to-r from-blue-200 to-pink-200 dark:from-blue-900 dark:to-pink-900 text-blue-900 dark:text-pink-200 px-2 py-1 rounded text-xs font-semibold shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-lg hover:from-blue-700 hover:to-pink-600 transition font-semibold shadow"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-pink-600 transition flex items-center gap-2 font-semibold shadow"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98.01 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.08.79 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/>
                </svg>
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;