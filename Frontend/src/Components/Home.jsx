import React from 'react';

const Home = () => {
  return (
    <section
      className="home flex items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500"
      id="home"
    >
      <div className="home-content text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-300 mb-2 drop-shadow-lg">
          Hi, I'm Raghunandan Singh Rathore
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
          Full Stack Developer | MERN Stack Developer 
        </h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 mb-6">
          Passionate about building scalable web applications and beautiful user interfaces. I love to learn new technologies and contribute to open source. 
          <span className="font-semibold text-blue-700 dark:text-pink-400"> Let's create something amazing together!</span>
        </p>
      </div>
    </section>
  );
};

export default Home;