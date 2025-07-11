import React from 'react';

// Font Awesome icons for each skill
const skillsData = [
  { name: 'C', icon: 'fas fa-code' },
  { name: 'C++', icon: 'fas fa-code' },
  { name: 'Python', icon: 'fab fa-python' },
  { name: 'HTML & CSS', icon: 'fab fa-html5' },
  { name: 'JavaScript', icon: 'fab fa-js-square' },
  { name: 'React.js', icon: 'fab fa-react' },
  { name: 'Express.js', icon: 'fas fa-server' },
  { name: 'Node.js', icon: 'fab fa-node' },
  { name: 'SQL', icon: 'fas fa-database' },
  { name: 'MongoDB', icon: 'fas fa-database' },
  { name: 'Tailwind CSS', icon: 'fab fa-css3-alt' },
  { name: 'Git', icon: 'fab fa-git-alt' },
  { name: 'GitHub', icon: 'fab fa-github' },
];

const Skills = () => (
  <section
    id="skills"
    className="py-12 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 transition-colors duration-500"
  >
    <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500">
      Skills
    </h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
      {skillsData.map((skill, idx) => (
        <div
          className="flex items-center justify-center gap-2 p-4 bg-white/90 rounded-lg shadow hover:scale-105 transition-transform skill-item border border-blue-100"
          key={idx}
        >
          <i className={`${skill.icon} text-xl text-blue-600`}></i>
          <span className="font-medium text-gray-700">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;