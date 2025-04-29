import React, { useState } from 'react';

const Register = () => {
  const [role, setRole] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-600">Register</h2>
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <input 
          type="text" 
          placeholder="Username" 
          className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="email" 
          placeholder="Email" 
          className="mb-4 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="mb-6 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Role Select Dropdown */}
        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="mb-6 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="developer">Developer</option>
          <option value="guest">Guest</option>
        </select>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
