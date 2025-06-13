import React, { useState } from 'react';

const internshipData = [
  {
    title: 'Full Stack Developer - Technology Twist',
    period: 'Nov 2024 - Jan 2025 | Bhilwara, Rajasthan',
    description:
      'Designed a shopping cart website to simplify online shopping, enabling users to browse, add items, and securely checkout with ease.',
    technologies: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Ethical Hacking and Penetration Testing - C-DAC',
    period: 'Aug 2024 - Oct 2024 | Remote',
    description:
      'Gained hands-on experience with Virtual Private Networks (VPN), Kali Linux, and Linux systems.',
    technologies: ['VPN', 'Kali Linux', 'Linux'],
  },
  {
    title: 'Full Stack Web Developer - All India Council For Technical Skill Development',
    period: 'May 2024 - Jun 2024 | Remote',
    description:
      'Developed the front end of an application using HTML, CSS, JavaScript, and Bootstrap with a clean responsive design. Built the backend using Node.js.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Node.js'],
  },
  {
    title: 'Web Developer - InternShala Trainings',
    period: 'Aug 2023 - Sep 2023 | Remote',
    description:
      'Learned HTML, CSS, and JavaScript to create interactive and responsive web pages.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

const Internship = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (idx) => {
    setExpanded(expanded === idx ? null : idx);
  };

  return (
    <section
      id="internship-training"
      data-aos="fade-up"
      className="py-16 px-2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 tracking-tight drop-shadow-lg relative">
        Internship / Training
        <span className="block mx-auto mt-2 w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full animate-pulse"></span>
      </h2>
      <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {internshipData.map((exp, idx) => (
          <div
            key={idx}
            className={`relative bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow-2xl p-6 flex flex-col border-l-8 ${
              idx % 2 === 0
                ? 'border-blue-500'
                : 'border-purple-500'
            } hover:border-pink-500 dark:hover:border-blue-400 hover:scale-105 transition-all duration-300`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => handleToggle(idx)}
              title="Click to expand/collapse"
            >
              <h3 className="text-lg font-bold text-blue-700 dark:text-blue-400">{exp.title}</h3>
              <button
                className="ml-2 text-xl text-gray-500 dark:text-gray-300 focus:outline-none"
                aria-label="Expand/Collapse"
              >
                <i className={`fas fa-chevron-${expanded === idx ? 'up' : 'down'}`}></i>
              </button>
            </div>
            <p className="italic text-gray-500 dark:text-gray-400 mb-2">{exp.period}</p>
            {(expanded === idx || window.innerWidth >= 768) && (
              <>
                <p className="mb-2 text-gray-700 dark:text-gray-200">{exp.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="inline-block bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 dark:from-blue-900 dark:via-purple-900 dark:to-pink-900 text-blue-700 dark:text-blue-200 px-3 py-1 rounded-full text-xs font-semibold shadow"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Internship;