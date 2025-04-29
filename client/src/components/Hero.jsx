import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 py-20 bg-gray-50">
      <div className="max-w-xl">
        <h1 className="text-5xl font-extrabold mb-6">
          Connect with Developers Worldwide 🌎
        </h1>
        <p className="text-gray-600 mb-8">
          DevConnect is the ultimate community to collaborate, learn, and grow together.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </div>

      <div className="mt-10 md:mt-0">
        <img src="https://via.placeholder.com/400x300" alt="Hero" className="rounded-lg shadow-lg" />
      </div>
    </section>
  );
};

export default Hero;
