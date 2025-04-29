import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">DevConnect</div>
      <ul className="flex space-x-6">
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">About</li>
        <li className="text-gray-600 hover:text-blue-600 cursor-pointer">Login</li>
      </ul>
    </nav>
  );
};

export default Navbar;
