import React, { useEffect, useState } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Certfications from './Components/Certfications';
import Internships from './Components/Internship';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css'; // Import your CSS file for styles

// Scroll progress bar feature
function ScrollProgressBar() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      document.getElementById('progress-bar').style.width = `${progress}%`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div
      id="progress-bar"
      className="fixed top-0 left-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-fuchsia-500 z-50 transition-all duration-200"
      style={{ width: '0%' }}
    />
  );
}


// Back to Top Button feature
function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return show ? (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-fuchsia-600 via-blue-600 to-cyan-400 text-white p-3 rounded-full shadow-lg hover:from-fuchsia-700 hover:to-cyan-500 transition"
      aria-label="Back to Top"
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  ) : null;
}

// New Feature: Theme Toggle (Light/Dark)
function ThemeToggle() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);
  return (
    <button
      className="fixed bottom-6 left-6 z-50 bg-gradient-to-br from-blue-500 to-fuchsia-500 text-white p-3 rounded-full shadow-lg hover:from-blue-600 hover:to-fuchsia-600 transition"
      onClick={() => setDark(d => !d)}
      aria-label="Toggle Theme"
    >
      {dark ? (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.22 2.22a1 1 0 011.42 1.42l-.71.7a1 1 0 11-1.41-1.41l.7-.71zM18 9a1 1 0 100 2h-1a1 1 0 100-2h1zm-2.22 6.78a1 1 0 00-1.42-1.42l-.7.71a1 1 0 101.41 1.41l.71-.7zM10 16a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zm-6.22-2.22a1 1 0 00-1.42 1.42l.71.7a1 1 0 101.41-1.41l-.7-.71zM4 11a1 1 0 100-2H3a1 1 0 100 2h1zm2.22-6.78a1 1 0 00-1.42 1.42l.7.71a1 1 0 101.41-1.41l-.69-.72z" />
        </svg>
      )}
    </button>
  );
}

function App() {
  return (
    <div className="bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen transition-colors duration-300">
      <ScrollProgressBar />
      <Navbar />
      <ThemeToggle />
      <main>
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>
        
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        
        <section id="internship-training" className="scroll-mt-16">
          <Internships />
        </section>
        <Skills />
        <Projects />
        <Certfications />
        <section id="contact" className="scroll-mt-16">
          <Contact />
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;