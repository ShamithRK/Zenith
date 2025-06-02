import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white mt-10">
      <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-sm">
          © {new Date().getFullYear()} KaushalyaSetu. All rights reserved.
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/student/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/student/certificates" className="hover:underline">Certificates</Link>
          <Link to="/student/achievements" className="hover:underline">Achievements</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
