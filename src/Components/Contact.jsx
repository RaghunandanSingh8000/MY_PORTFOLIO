import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Sending...');
    try {
      const res = await fetch('https://formspree.io/f/myzejdok', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormStatus('Message sent successfully!');
        setForm({ name: '', email: '', message: '' });
      } else {
        setFormStatus('Failed to send message. Please try again.');
      }
    } catch {
      setFormStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-2 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 transition-colors duration-500"
    >
      <h2 className="text-4xl font-extrabold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-purple-600 to-pink-500 tracking-tight drop-shadow-lg">
        Contact
      </h2>
      <p className="text-center mb-10 text-lg text-gray-700">
        Currently open to new opportunities. Let's connect!
      </p>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center max-w-4xl mx-auto">
        <div className="contact-info text-lg space-y-4 p-6 w-full md:w-1/2 border border-blue-100 rounded-2xl shadow-lg bg-transparent">
          <p>
            <i className="fas fa-map-marker-alt text-blue-600 mr-2"></i>
            <span className="font-semibold text-blue-700">Bhilwara, Rajasthan</span>
          </p>
          <p>
            <i className="fas fa-phone text-blue-600 mr-2"></i>
            <span className="font-semibold text-blue-700">+91 8000822909</span>
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="mailto:raghunandansingh@gmail.com"
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <i className="fas fa-envelope"></i> Email
            </a>
            <a
              href="https://www.linkedin.com/in/raghunandan-singh-rathore-7b0b3b1b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-700 hover:underline"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://github.com/RaghunandanSingh8000/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-800 hover:underline"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
        {/* Contact Form directly on the page */}
        <div className="w-full md:w-1/2 p-6 border border-blue-100 rounded-2xl shadow-lg bg-transparent">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Me</h2>
          <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
            <div>
              <label htmlFor="name" className="block font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-1">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-medium mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                className="w-full px-3 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400 bg-transparent"
                rows={4}
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow hover:from-blue-700 hover:to-purple-700 transition font-semibold"
            >
              Send
            </button>
          </form>
          <div id="form-status" className="mt-4 text-center text-sm text-green-600">
            {formStatus}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;